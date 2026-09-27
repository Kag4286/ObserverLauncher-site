// shader.js — WebGL "signal field". A full-screen fragment shader: a breathing radial core, a
// hairline dot grid, faint falling data streams (vertical scan ticks) and a slow horizontal sweep.
// Everything drifts toward the pointer; intensity warms with scroll. GPU only. Falls back to a CSS
// gradient if WebGL is unavailable or the user prefers reduced motion.
(function(){
  const cv=document.getElementById('field');
  if(!cv) return;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

  const gl=cv.getContext('webgl',{antialias:false,alpha:true,premultipliedAlpha:true,powerPreference:'low-power'});
  if(!gl){ cv.remove(); return; }

  const VERT=`attribute vec2 p;void main(){gl_Position=vec4(p,0.0,1.0);}`;
  const FRAG=`
    precision highp float;
    uniform vec2 u_res; uniform float u_time; uniform vec2 u_mouse; uniform float u_intensity;
    float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    float noise(vec2 p){
      vec2 i=floor(p),f=fract(p); vec2 u=f*f*(3.0-2.0*f);
      return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y);
    }
    void main(){
      vec2 uv=gl_FragCoord.xy/u_res;
      vec2 asp=vec2(u_res.x/u_res.y,1.0);
      vec2 c=(uv-0.5)*asp;
      // breathing core, drifting toward the pointer
      vec2 core=vec2(-0.34,0.30)+(u_mouse-0.5)*0.12;
      float breath=0.5+0.5*sin(u_time*0.22);
      float glow=smoothstep(0.95,0.0,length(c-core))*(0.40+0.18*breath);
      // secondary blob lower-right
      float glow2=smoothstep(0.72,0.0,length(c-vec2(0.58,-0.5)))*0.15;
      // hairline dot grid
      vec2 g=uv*asp*44.0; vec2 gf=abs(fract(g)-0.5);
      float grid=smoothstep(0.44,0.5,max(gf.x,gf.y));
      float mask=smoothstep(1.2,0.15,length(c-vec2(-0.2,0.1)));
      // falling data streams: thin vertical columns, a bright tick travelling down each
      float col=floor(uv.x*asp.x*26.0);
      float seed=hash(vec2(col,3.7));
      float speed=0.06+seed*0.14;
      float y=fract(uv.y + u_time*speed + seed);
      float streak=smoothstep(0.86,1.0,y)*smoothstep(0.55,0.0,abs(fract(uv.x*asp.x*26.0)-0.5));
      streak*= (seed>0.55?1.0:0.0)*0.5;
      // slow horizontal sweep
      float sweep=exp(-pow((fract(uv.y*0.5 - u_time*0.015)-0.5)*6.0,2.0))*0.10;
      float n=noise(uv*3.0+u_time*0.03)*0.045;
      vec3 color=vec3(0.0,0.898,1.0);
      float a=(glow+glow2)*u_intensity*0.78 + grid*mask*0.04*u_intensity + (streak+sweep+n)*u_intensity*0.7;
      gl_FragColor=vec4(color*a, a*0.8);
    }`;

  function sh(type,src){ const s=gl.createShader(type); gl.shaderSource(s,src); gl.compileShader(s); if(!gl.getShaderParameter(s,gl.COMPILE_STATUS)){ console.warn('shader',gl.getShaderInfoLog(s)); return null;} return s; }
  const vs=sh(gl.VERTEX_SHADER,VERT), fs=sh(gl.FRAGMENT_SHADER,FRAG);
  if(!vs||!fs){ cv.remove(); return; }
  const prog=gl.createProgram(); gl.attachShader(prog,vs); gl.attachShader(prog,fs); gl.linkProgram(prog);
  if(!gl.getProgramParameter(prog,gl.LINK_STATUS)){ cv.remove(); return; }
  gl.useProgram(prog);

  const buf=gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER,buf);
  gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
  const loc=gl.getAttribLocation(prog,'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);

  const uRes=gl.getUniformLocation(prog,'u_res'), uTime=gl.getUniformLocation(prog,'u_time');
  const uMouse=gl.getUniformLocation(prog,'u_mouse'), uInt=gl.getUniformLocation(prog,'u_intensity');

  gl.enable(gl.BLEND); gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA); gl.clearColor(0,0,0,0);

  let mx=0.5,my=0.5,tx=0.5,ty=0.5,w=0,h=0,dpr=Math.min(devicePixelRatio||1,1.75);
  function resize(){ w=cv.clientWidth; h=cv.clientHeight; cv.width=Math.max(1,Math.floor(w*dpr)); cv.height=Math.max(1,Math.floor(h*dpr)); gl.viewport(0,0,cv.width,cv.height); gl.uniform2f(uRes,cv.width,cv.height); }
  addEventListener('resize',resize); resize();
  addEventListener('pointermove',e=>{ tx=e.clientX/innerWidth; ty=1-e.clientY/innerHeight; },{passive:true});
  let intensity=0.5;
  addEventListener('scroll',()=>{ const p=Math.min(1,scrollY/Math.max(1,innerHeight)); intensity=0.5+p*0.3; },{passive:true});

  let start=performance.now(), raf=0;
  function draw(t){ gl.uniform1f(uTime,t); gl.uniform2f(uMouse,mx,my); gl.uniform1f(uInt,intensity); gl.clear(gl.COLOR_BUFFER_BIT); gl.drawArrays(gl.TRIANGLES,0,6); }
  function frame(now){ const t=(now-start)/1000; mx+=(tx-mx)*0.05; my+=(ty-my)*0.05; draw(t); raf=requestAnimationFrame(frame); }

  if(reduce){ draw(1.0); cv.dataset.on='1'; return; }
  document.addEventListener('visibilitychange',()=>{ if(document.hidden){ cancelAnimationFrame(raf); raf=0; } else if(!raf){ start=performance.now()-1; raf=requestAnimationFrame(frame); } });
  raf=requestAnimationFrame(frame);
  cv.dataset.on='1';
})();
