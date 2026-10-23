// i18n.js — 7 locales for ObserverLauncher site. Smooth language morphing via View Transitions.
(function(){
  const LOCALES_META=[
    {code:'en',label:'English',short:'EN'},
    {code:'vi',label:'Tiếng Việt',short:'VI'},
    {code:'es',label:'Español',short:'ES'},
    {code:'pt-BR',label:'Português (BR)',short:'PT'},
    {code:'de',label:'Deutsch',short:'DE'},
    {code:'ru',label:'Русский',short:'RU'},
    {code:'zh-CN',label:'简体中文',short:'ZH'},
  ];

  const STR={
  en:{
    'nav.why':'Why Observer','nav.showcase':'Showcase','nav.software':'Software','nav.ai':'AI / MCP',
    'nav.faq':'FAQ','nav.download':'Download','nav.changelog':'Changelog','nav.back':'Home',
    'cta.download':'Download','cta.getStarted':'Download ObserverLauncher','cta.github':'View on GitHub',

    'hero.badge':'New release 6.1.0 • Free & Open Source',
    'hero.title':'Host your Minecraft server in 60 seconds.<br>No terminal required.',
    'hero.lead':'ObserverLauncher handles Java runtimes, firewall rules, and server configurations automatically. Share a link with your friends through built-in tunnels without touching your router.',
    'hero.fact1':'No account needed','hero.fact2':'100% Local on your PC','hero.fact3':'Zero telemetry or tracking','hero.fact4':'Windows & Linux',

    'why.eyebrow':'WHY OBSERVERLAUNCHER','why.title':'Say goodbye to terminal errors and router headaches.','why.sub':'Everything you need to play Minecraft together in one simple, beautiful desktop app.',
    'why.c1tag':'100% Automatic','why.c1t':'Zero Java mismatch errors','why.c1d':'Minecraft 1.21 needs Java 21; 1.12 needs Java 8. ObserverLauncher automatically detects, downloads and isolates the exact Java runtime required for your server, keeping your computer clean.',
    'why.c2tag':'No Port Forwarding','why.c2t':'Play with friends in 1 click','why.c2d':'No more logging into your router or messing with NAT settings. ObserverLauncher comes with built-in tunneling (Playit.gg / Pinggy) that gives you a public address to share instantly.',
    'why.c3tag':'Crash Prevention','why.c3t':'Safe Mod & Plugin marketplace','why.c3d':'Search and install mods and plugins directly from Modrinth, Hangar, and SpigotMC. The built-in conflict detector warns you of duplicate or incompatible mods before they crash your world.',
    'why.c4tag':'Peace of Mind','why.c4t':'3D Player inspector & 1-click backups','why.c4d':'Inspect your friends\' inventories and 3D skins, view live maps of explored areas, and take automatic ZIP backups before experimenting with new mods so you never lose progress.',

    'showcase.eyebrow':'SEE IT IN ACTION','showcase.title':'Built for humans, not servers in a datacenter.','showcase.sub':'Take a look inside the visual interface designed to make server hosting joyful.',
    'showcase.tab1':'Overview & Control','showcase.tab2':'3D Player Inspector','showcase.tab3':'Live World Map','showcase.tab4':'AI / MCP Assistant',
    'showcase.p1tag':'Live Dashboard','showcase.p1t':'Monitor your server at a single glance','showcase.p1d':'Real-time TPS, MSPT, CPU and RAM graphs with plain-language alerts when your server lags. One button to Start, Stop, or Restart without ever opening a terminal.',
    'showcase.p1b1':'Instant server start and stop with automatic world save',
    'showcase.p1b2':'Live memory and tick-rate graphs with lag diagnosis',
    'showcase.p1b3':'Beginner mode toggle to hide advanced options until you want them',
    'showcase.p2tag':'3D Inspection','showcase.p2t':'Real skins, inventory slots, and armor','showcase.p2d':'Inspect online, whitelisted, or banned players with rotatable 3D player skins. View their exact inventory, Ender chest, and health stats with real game icons (including modded items).',
    'showcase.p2b1':'Rotatable 3D model dressed in the player\'s own skin and armor',
    'showcase.p2b2':'Interactive inventory grid with stack counts and mod items',
    'showcase.p2b3':'Kick, ban, OP, or whitelist players with a single click',
    'showcase.p3tag':'World Visualization','showcase.p3t':'Explore your server world in real-time','showcase.p3d':'Rendered directly from your world save files: see discovered terrain, biomes, spawn location, and live player coordinates with custom waypoints you can manage.',
    'showcase.p3b1':'Real terrain and biome map generated directly from save chunks',
    'showcase.p3b2':'Live player coordinates and world spawn marker',
    'showcase.p3b3':'Create and teleport to waypoints (bases, nether portals, mines)',
    'showcase.p4tag':'Automation','showcase.p4t':'Connect Claude or ChatGPT to manage your server','showcase.p4d':'ObserverLauncher features an integrated Model Context Protocol (MCP) server. Ask your favorite AI in natural language to diagnose crash logs, recommend plugins, or build modpacks.',
    'showcase.p4b1':'Crash Doctor: AI analyzes console logs and explains fixes in plain words',
    'showcase.p4b2':'Natural language modpack builder with compatibility verification',
    'showcase.p4b3':'100% Localhost security with freshly generated session tokens',

    'soft.eyebrow':'COMPATIBILITY','soft.title':'Runs all your favorite server software.','soft.sub':'Version lists load live from official project repositories so new Minecraft releases are available instantly.',

    'ai.eyebrow':'OPTIONAL SUPERPOWER','ai.title':'Let an AI assistant handle the technical chores.','ai.lead':'ObserverLauncher acts as a local MCP (Model Context Protocol) server. Hook it up to Claude Desktop, ChatGPT, or Cursor to troubleshoot crashes and manage modpacks through simple conversation.',
    'ai.p1t':'Server Crash Doctor','ai.p1d':'When a server stops unexpectedly, ask your AI: "Why did the server crash?" It reads the latest logs, points out the conflicting mod, and suggests the fix.',
    'ai.p2t':'Natural Language Modpack Setup','ai.p2d':'Say: "Install Create and optimization mods for Fabric 1.21.1." The AI searches Modrinth, verifies compatibility, and prepares installation for your confirmation.',
    'ai.p3t':'Local & Secure by Design','ai.p3d':'Runs exclusively on 127.0.0.1 with random tokens generated per session. Any write or destructive actions require explicit user approval.',

    'faq.eyebrow':'HONEST & TRANSPARENT','faq.title':'Frequently Asked Questions','faq.sub':'Everything you need to know about hosting locally with ObserverLauncher.',
    'trust.t1':'100% Local','trust.d1':'Your worlds, configs, and player data never leave your PC.',
    'trust.t2':'No Account Needed','trust.d2':'No registration, no emails, no logins, no cloud lock-in.',
    'trust.t3':'Zero Telemetry','trust.d3':'No background tracking, no analytics, no advertisements.',
    'trust.t4':'Zero Idle Drain','trust.d4':'Closing the app releases 100% of memory and CPU instantly.',
    'faq.q1':'Do I have to pay anything to host a server?','faq.a1':'No, ObserverLauncher is 100% free and open-source under the Apache-2.0 license. The server runs directly on your computer hardware, meaning there are no subscriptions or monthly hosting bills.',
    'faq.q2':'Can friends on phones (Minecraft Bedrock) join my Java server?','faq.a2':'Yes! ObserverLauncher provides 1-click Bedrock crossplay support using GeyserMC. Mobile, console, and PC players can join and play together in the same survival world seamlessly.',
    'faq.q3':'How do my friends connect without opening router ports?','faq.a3':'In the Network tab, simply enable the built-in tunnel (Playit.gg or Pinggy). ObserverLauncher generates a public server address that you can send to your friends. They paste it into Minecraft Multiplayer and connect immediately.',
    'faq.q4':'Will running a server make my computer laggy when I am not playing?','faq.a4':'Not at all. When you press Stop or close ObserverLauncher, all server processes terminate cleanly. No background daemons or services stay running on your computer.',

    'dl.eyebrow':'DOWNLOAD FREE','dl.title':'Start your world in 60 seconds.','dl.sub':'Choose your operating system below. Automatic updates are built in.',
    'dl.recWin':'Recommended for your PC','dl.recLinux':'Recommended for your PC',
    'dl.win':'ObserverLauncher-6.1.0-setup.exe','dl.winDesc':'64-bit installer with built-in auto updater',
    'dl.linux':'ObserverLauncher-6.1.0.AppImage','dl.linuxDesc':'Universal AppImage for Ubuntu, Fedora, Arch',
    'dl.signing':'Windows installer note: The binary is not commercially code-signed yet. If Windows SmartScreen shows a prompt, click "More info" then "Run anyway".',
    'dl.srcLabel':'Or run directly from source code:',

    'foot.tagline':'A modern desktop control panel for Minecraft: Java Edition servers.',
    'foot.project':'Project','foot.changelog':'Changelog','foot.license':'License (Apache-2.0)',
    'foot.community':'Community','foot.issues':'Issues','foot.contributing':'Contributing',
    'foot.disclaimer':'ObserverLauncher is an unofficial community tool, not affiliated with, endorsed by, or associated with Mojang, Microsoft, or any server-software project. Minecraft is a trademark of Mojang Synergies AB.',
    'foot.eula':'Hosting a server requires agreeing to the Minecraft End User License Agreement (EULA). No proprietary Mojang game assets are bundled.',
    'cl.eyebrow':'RELEASE HISTORY','cl.title':'Changelog','cl.sub':'Every release, straight from the developer changelog. Loaded live from the repository.','cl.loading':'Loading changelog…','cl.versions':'VERSIONS',
  },

  vi:{
    'nav.why':'Vì sao nên dùng','nav.showcase':'Trải nghiệm','nav.software':'Nền tảng','nav.ai':'AI / MCP',
    'nav.faq':'Hỏi đáp','nav.download':'Tải về','nav.changelog':'Changelog','nav.back':'Trang chủ',
    'cta.download':'Tải về','cta.getStarted':'Tải ObserverLauncher','cta.github':'Xem trên GitHub',

    'hero.badge':'Phiên bản mới 6.1.0 • Miễn phí & Mã nguồn mở',
    'hero.title':'Mở server Minecraft riêng trong 60 giây.<br>Không cần chạm vào dòng lệnh.',
    'hero.lead':'ObserverLauncher tự động tải Java, cấu hình server và mở firewall. Mời bạn bè tham gia qua đường truyền Tunnel tích hợp mà không cần mở port modem.',
    'hero.fact1':'Không cần tài khoản','hero.fact2':'100% Chạy trên máy bạn','hero.fact3':'Không thu thập dữ liệu','hero.fact4':'Hỗ trợ Windows & Linux',

    'why.eyebrow':'VÌ SAO NÊN DÙNG OBSERVERLAUNCHER','why.title':'Tạm biệt những ngày vật lộn với cmd và port router.','why.sub':'Mọi công cụ bạn cần để chơi chung một thế giới, được gói gọn trong giao diện đồ họa trực quan.',
    'why.c1tag':'Tự động 100%','why.c1t':'Không còn lỗi phiên bản Java','why.c1d':'Server 1.21 cần Java 21, server 1.12 cần Java 8. ObserverLauncher tự động tải và cách ly đúng bản Java cho từng server, không làm rối máy tính của bạn.',
    'why.c2tag':'Không cần mở Port','why.c2t':'Chơi qua mạng chỉ với 1 cú click','why.c2d':'Ngại đăng nhập vào modem nhà mạng? Tích hợp sẵn Tunnel (Playit / Pinggy), chỉ cần bấm bật là có ngay link chia sẻ để bạn bè vào chơi bất kể khoảng cách.',
    'why.c3tag':'An toàn & Ổn định','why.c3t':'Cài Mod/Plugin không lo sập server','why.c3d':'Tìm và cài đặt mod/plugin từ Modrinth và Hangar ngay trong app. Tự động kiểm tra tương thích và cảnh báo xung đột phiên bản trước khi làm hỏng thế giới.',
    'why.c4tag':'Trực quan & Yên tâm','why.c4t':'Soi đồ người chơi 3D & Sao lưu 1 chạm','why.c4d':'Xem skin 3D và túi đồ của bạn bè trong server, xem bản đồ vệ tinh live. Tự động sao lưu file thế giới thành file ZIP an toàn để phục hồi bất cứ lúc nào.',

    'showcase.eyebrow':'TRẢI NGHIỆM THỰC TẾ','showcase.title':'Thiết kế cho người chơi, không phải cho quản trị viên máy chủ.','showcase.sub':'Mọi tính năng quan trọng đều hiển thị trực quan và dễ thao tác.',
    'showcase.tab1':'Tổng quan & Quản lý','showcase.tab2':'Soi người chơi & Túi đồ 3D','showcase.tab3':'Bản đồ thế giới Live','showcase.tab4':'Trợ lý AI & Cài đặt',
    'showcase.p1tag':'Bảng điều khiển trực quan','showcase.p1t':'Nắm bắt tình trạng server trong chớp mắt','showcase.p1d':'Biểu đồ TPS, MSPT, RAM và CPU thời gian thực. Cảnh báo thông minh bằng tiếng người khi server có dấu hiệu lag hoặc tràn bộ nhớ. Một nút bật, tắt hoặc khởi động lại.',
    'showcase.p1b1':'Bật và tắt server tức thì với cơ chế tự động lưu world',
    'showcase.p1b2':'Biểu đồ RAM và tick-rate kèm chẩn đoán nguyên nhân gây lag',
    'showcase.p1b3':'Chế độ Beginner ẩn bớt công cụ phức tạp cho người mới',
    'showcase.p2tag':'Soi đồ 3D','showcase.p2t':'Mô hình 3D xoay được, túi đồ chi tiết','showcase.p2d':'Xem danh sách người chơi online, ban, whitelist hoặc OP. Mô hình 3D hiển thị đúng skin và giáp đang mặc. Xem trọn vẹn rương đồ và Ender Chest kể cả đồ từ mod.',
    'showcase.p2b1':'Mô hình 3D tương tác xoay tròn với skin và giáp thực tế',
    'showcase.p2b2':'Lưới túi đồ hiển thị chính xác số lượng item và đồ mod',
    'showcase.p2b3':'Kick, ban, cấp quyền OP hoặc whitelist chỉ với 1 cú click',
    'showcase.p3tag':'Bản đồ vệ tinh','showcase.p3t':'Khám phá thế giới của server thời gian thực','showcase.p3d':'Kết xuất trực tiếp từ file save thế giới: xem toàn cảnh địa hình, biome, tọa độ spawn và vị trí người chơi cùng hệ thống điểm mốc (waypoints) tiện lợi.',
    'showcase.p3b1':'Bản đồ địa hình và biome kết xuất trực tiếp từ chunk thế giới',
    'showcase.p3b2':'Tọa độ thời gian thực của người chơi và điểm spawn',
    'showcase.p3b3':'Tạo và dịch chuyển nhanh đến các mốc (nhà, cổng Nether, mỏ)',
    'showcase.p4tag':'Tự động hóa','showcase.p4t':'Kết nối Claude hoặc ChatGPT để quản lý server','showcase.p4d':'Tích hợp máy chủ MCP (Model Context Protocol). Bạn có thể chat bằng ngôn ngữ tự nhiên để nhờ AI đọc log crash, gợi ý plugin hoặc tạo modpack nhanh gọn.',
    'showcase.p4b1':'Bác sĩ Crash: AI đọc log console và giải thích nguyên nhân bằng tiếng Việt',
    'showcase.p4b2':'Xây dựng modpack bằng câu lệnh tự nhiên với kiểm tra tương thích',
    'showcase.p4b3':'Bảo mật 100% trên Localhost với token ngẫu nhiên mỗi phiên',

    'soft.eyebrow':'TƯƠNG THÍCH ĐA DẠNG','soft.title':'Hỗ trợ mọi loại server bạn muốn.','soft.sub':'Danh sách phiên bản cập nhật tự động từ nguồn chính thức của Mojang, PaperMC, Fabric và Forge.',

    'ai.eyebrow':'TÍNH NĂNG NÂNG CAO','ai.title':'Để AI giúp bạn xử lý những việc phức tạp.','ai.lead':'ObserverLauncher hỗ trợ giao thức MCP. Bạn có thể kết nối với Claude Desktop, ChatGPT hay Cursor để AI tự đọc log khi server crash, tự chẩn đoán lỗi, hoặc cài modpack qua trò chuyện.',
    'ai.p1t':'Bác sĩ chẩn đoán Crash','ai.p1d':'Khi server bị sập đột ngột, chỉ cần hỏi AI: "Tại sao server bị crash?". AI sẽ đọc log mới nhất, chỉ ra mod gây lỗi và hướng dẫn cách khắc phục.',
    'ai.p2t':'Cài đặt Modpack bằng giọng nói / chat','ai.p2d':'Chỉ cần bảo: "Cài cho tôi mod tối ưu FPS và voice chat cho Fabric 1.21.1." AI sẽ tìm kiếm trên Modrinth, kiểm tra tương thích và chuẩn bị cài đặt.',
    'ai.p3t':'Bảo mật tuyệt đối trên máy bạn','ai.p3d':'Chỉ hoạt động trên địa chỉ 127.0.0.1 với mã bảo vệ sinh ngẫu nhiên. Mọi hành động chỉnh sửa file đều cần sự xác nhận của bạn.',

    'faq.eyebrow':'MINH BẠCH & RÕ RÀNG','faq.title':'Câu hỏi thường gặp','faq.sub':'Những điều bạn cần biết khi tự mở server Minecraft với ObserverLauncher.',
    'trust.t1':'100% Trên máy bạn','trust.d1':'File thế giới, cấu hình và dữ liệu không bao giờ rời khỏi PC.',
    'trust.t2':'Không cần tài khoản','trust.d2':'Không đăng ký, không email, không đăng nhập đám mây.',
    'trust.t3':'Zero Telemetry','trust.d3':'Không thu thập dữ liệu hành vi, không theo dõi, không quảng cáo.',
    'trust.t4':'Giải phóng tài nguyên','trust.d4':'Tắt ứng dụng là giải phóng 100% RAM và CPU, không có dịch vụ ngầm.',
    'faq.q1':'Tôi có phải trả bất kỳ khoản phí nào để mở server không?','faq.a1':'Hoàn toàn không. ObserverLauncher miễn phí 100% theo giấy phép mã nguồn mở Apache-2.0. Server chạy trực tiếp trên phần cứng máy tính của bạn, không có phí duy trì hàng tháng.',
    'faq.q2':'Bạn bè dùng điện thoại (Minecraft Bedrock) có vào chơi chung được không?','faq.a2':'Được! ObserverLauncher tích hợp hỗ trợ GeyserMC chỉ với 1 cú click, giúp người chơi điện thoại, console và máy tính có thể chơi chung trong cùng một thế giới Java.',
    'faq.q3':'Làm sao để bạn bè ở xa tham gia mà không cần mở port modem?','faq.a3':'Bạn chỉ cần bật tính năng Tunnel có sẵn trong mục Network của ObserverLauncher (sử dụng Playit.gg hoặc Pinggy). Ứng dụng sẽ cấp cho bạn một địa chỉ IP công khai để gửi cho bạn bè vào ngay lập tức.',
    'faq.q4':'Mở server trên máy tôi có làm máy bị chậm khi không chơi không?','faq.a4':'Không hề. Khi bạn bấm Stop hoặc tắt ứng dụng ObserverLauncher, toàn bộ tiến trình server sẽ dừng lại hoàn toàn. Không có bất kỳ phần mềm chạy ngầm nào làm tốn tài nguyên.',

    'dl.eyebrow':'TẢI VỀ MIỄN PHÍ','dl.title':'Bắt đầu thế giới của bạn trong 60 giây.','dl.sub':'Chọn hệ điều hành bên dưới. Ứng dụng tự động cập nhật khi có bản mới.',
    'dl.recWin':'Khuyên dùng cho máy bạn','dl.recLinux':'Khuyên dùng cho máy bạn',
    'dl.win':'ObserverLauncher-6.1.0-setup.exe','dl.winDesc':'Bản cài đặt 64-bit tự động cập nhật',
    'dl.linux':'ObserverLauncher-6.1.0.AppImage','dl.linuxDesc':'Bản AppImage cho Ubuntu, Fedora, Arch',
    'dl.signing':'Lưu ý cho bản Windows: Do bản cài chưa mua chứng chỉ thương mại nên Windows SmartScreen có thể hiện cảnh báo. Bạn chỉ cần bấm "More info" rồi chọn "Run anyway".',
    'dl.srcLabel':'Hoặc chạy trực tiếp từ mã nguồn:',

    'foot.tagline':'Bảng điều khiển trực quan cho server Minecraft: Java Edition.',
    'foot.project':'Dự án','foot.changelog':'Changelog','foot.license':'Giấy phép (Apache-2.0)',
    'foot.community':'Cộng đồng','foot.issues':'Báo lỗi (Issues)','foot.contributing':'Đóng góp mã nguồn',
    'foot.disclaimer':'ObserverLauncher là công cụ cộng đồng không chính thức, không liên kết hay xác thực bởi Mojang hoặc Microsoft. Minecraft là thương hiệu của Mojang Synergies AB.',
    'foot.eula':'Mở server yêu cầu chấp thuận Thỏa thuận Giấy phép Người dùng Cuối (EULA) của Minecraft. Ứng dụng không chứa tài sản độc quyền của Mojang.',
    'cl.eyebrow':'LỊCH SỬ PHÁT HÀNH','cl.title':'Nhật ký cập nhật','cl.sub':'Mọi bản phát hành, tải trực tiếp từ repository chính thức.','cl.loading':'Đang tải changelog…','cl.versions':'PHIÊN BẢN',
  },

  es:{
    'nav.why':'Por qué Observer','nav.showcase':'Demostración','nav.software':'Software','nav.ai':'IA / MCP',
    'nav.faq':'Preguntas','nav.download':'Descarga','nav.changelog':'Registro de cambios','nav.back':'Inicio',
    'cta.download':'Descargar','cta.getStarted':'Descargar ObserverLauncher','cta.github':'Ver en GitHub',

    'hero.badge':'Nueva versión 6.1.0 • Gratis y Código Abierto',
    'hero.title':'Crea tu servidor de Minecraft en 60 segundos.<br>Sin comandos de terminal.',
    'hero.lead':'ObserverLauncher gestiona Java, reglas de firewall y archivos de configuración automáticamente. Invita a tus amigos con túneles integrados sin abrir puertos en tu router.',
    'hero.fact1':'Sin cuenta','hero.fact2':'100% Local en tu PC','hero.fact3':'Cero telemetría','hero.fact4':'Windows y Linux',

    'why.eyebrow':'POR QUÉ OBSERVERLAUNCHER','why.title':'Dile adiós a los errores de terminal y al router.','why.sub':'Todo lo que necesitas para jugar Minecraft juntos en una interfaz gráfica moderna.',
    'why.c1tag':'100% Automático','why.c1t':'Cero problemas con versiones de Java','why.c1d':'Minecraft 1.21 requiere Java 21; 1.12 necesita Java 8. ObserverLauncher descarga y aísla la versión exacta de Java para cada servidor sin tocar tu sistema.',
    'why.c2tag':'Sin Abrir Puertos','why.c2t':'Juega con amigos en 1 clic','why.c2d':'Olvídate de configurar tu router o NAT. Con túneles integrados (Playit.gg / Pinggy), obtienes una dirección pública para compartir al instante.',
    'why.c3tag':'Prevención de Fallos','why.c3t':'Marketplace seguro de Mods y Plugins','why.c3d':'Instala mods y plugins directamente desde Modrinth y Hangar. El detector de conflictos te avisa de incompatibilidades antes de que tu servidor se caiga.',
    'why.c4tag':'Tranquilidad Total','why.c4t':'Inspector 3D y copias de seguridad en 1 clic','why.c4d':'Inspecciona el inventario y skins en 3D de tus amigos, explora mapas en vivo y haz copias de seguridad ZIP antes de probar nuevos mods.',

    'showcase.eyebrow':'MÍRALO EN ACCIÓN','showcase.title':'Diseñado para jugadores, no para centros de datos.','showcase.sub':'Una interfaz gráfica intuitiva que hace que hospedar servidores sea sencillo.',
    'showcase.tab1':'Panel General','showcase.tab2':'Inspector de Jugadores 3D','showcase.tab3':'Mapa del Mundo en Vivo','showcase.tab4':'Asistente IA / MCP',
    'showcase.p1tag':'Panel en Vivo','showcase.p1t':'Supervisa tu servidor de un vistazo','showcase.p1d':'Gráficos de TPS, MSPT, RAM y CPU en tiempo real. Alertas en lenguaje claro si el servidor tiene lag. Un solo botón para Iniciar, Detener o Reiniciar.',
    'showcase.p1b1':'Inicio y apagado instantáneo con guardado automático del mundo',
    'showcase.p1b2':'Gráficos en vivo con diagnóstico de causas de lag',
    'showcase.p1b3':'Modo Principiante para ocultar opciones avanzadas',
    'showcase.p2tag':'Inspección 3D','showcase.p2t':'Skins reales, inventario y armadura','showcase.p2d':'Inspecciona jugadores conectados o baneados con modelos 3D rotables. Visualiza su inventario completo y cofre de ender con iconos reales.',
    'showcase.p2b1':'Modelo 3D rotable con skin y armadura real del jugador',
    'showcase.p2b2':'Cuadrícula de inventario interactiva con objetos de mods',
    'showcase.p2b3':'Expulsa, banea, da OP o gestiona la whitelist con 1 clic',
    'showcase.p3tag':'Visualización','showcase.p3t':'Explora el mundo del servidor en tiempo real','showcase.p3d':'Generado a partir de los archivos de guardado: terreno explorado, biomas, coordenadas de jugadores y puntos de interés gestionables.',
    'showcase.p3b1':'Mapa de terreno y biomas generado desde los chunks',
    'showcase.p3b2':'Coordenadas en vivo de jugadores y punto de spawn',
    'showcase.p3b3':'Crea y teletranspórtate a puntos de referencia',
    'showcase.p4tag':'Automatización','showcase.p4t':'Conecta Claude o ChatGPT para gestionar tu servidor','showcase.p4d':'Incluye servidor MCP integrado. Pídele a tu IA en lenguaje natural que analice logs de error o arme modpacks compatibles.',
    'showcase.p4b1':'Doctor de Fallos: la IA explica las causas de caídas en palabras sencillas',
    'showcase.p4b2':'Armador de modpacks en lenguaje natural con verificación',
    'showcase.p4b3':'Seguridad 100% en Localhost con tokens aleatorios por sesión',

    'soft.eyebrow':'COMPATIBILIDAD','soft.title':'Soporta todos tus programas de servidor favoritos.','soft.sub':'Las listas de versiones cargan directamente desde los repositorios oficiales.',

    'ai.eyebrow':'SUPERPODER OPCIONAL','ai.title':'Deja que la IA se encargue de lo técnico.','ai.lead':'ObserverLauncher funciona como servidor MCP local. Conéctalo a Claude Desktop o ChatGPT para resolver problemas mediante conversación.',
    'ai.p1t':'Doctor de Servidores','ai.p1d':'Pregunta: "¿Por qué se cayó el servidor?" La IA lee los registros y te muestra la solución.',
    'ai.p2t':'Instalación de Modpacks','ai.p2d':'Di: "Instala Create y mods de rendimiento para Fabric 1.21.1." La IA verifica compatibilidad y lo prepara todo.',
    'ai.p3t':'Local y Seguro','ai.p3d':'Opera sólo en 127.0.0.1 con tokens generados al iniciar. Cualquier cambio requiere tu autorización.',

    'faq.eyebrow':'TRANSPARENTE','faq.title':'Preguntas Frecuentes','faq.sub':'Todo lo que necesitas saber sobre ObserverLauncher.',
    'trust.t1':'100% Local','trust.d1':'Tus mundos y datos nunca salen de tu ordenador.',
    'trust.t2':'Sin Cuentas','trust.d2':'Sin registros, correos ni inicio de sesión.',
    'trust.t3':'Cero Telemetría','trust.d3':'Sin rastreo en segundo plano ni anuncios.',
    'trust.t4':'Sin Consumo Inactivo','trust.d4':'Cerrar la app libera el 100% de memoria y CPU.',
    'faq.q1':'¿Tengo que pagar algo?','faq.a1':'No, ObserverLauncher es 100% gratuito y de código abierto bajo licencia Apache-2.0. El servidor corre en tu propio PC.',
    'faq.q2':'¿Pueden unirse amigos desde el móvil (Bedrock)?','faq.a2':'¡Sí! Soporta GeyserMC con 1 clic, permitiendo que jugadores de móvil y PC jueguen juntos.',
    'faq.q3':'¿Cómo se conectan mis amigos sin abrir puertos?','faq.a3':'Activa la opción de túnel integrado (Playit.gg / Pinggy) en la pestaña Red para obtener una dirección pública al instante.',
    'faq.q4':'¿Ralentizará mi ordenador cuando no esté jugando?','faq.a4':'En absoluto. Al detener el servidor o cerrar la aplicación, todos los procesos terminan de inmediato.',

    'dl.eyebrow':'DESCARGA GRATUITA','dl.title':'Empieza tu mundo en 60 segundos.','dl.sub':'Elige tu sistema operativo. Actualizaciones automáticas incluidas.',
    'dl.recWin':'Recomendado para tu PC','dl.recLinux':'Recomendado para tu PC',
    'dl.win':'ObserverLauncher-6.1.0-setup.exe','dl.winDesc':'Instalador de 64 bits con auto-actualizador',
    'dl.linux':'ObserverLauncher-6.1.0.AppImage','dl.linuxDesc':'AppImage universal para Ubuntu, Fedora y Arch',
    'dl.signing':'Nota para Windows: si SmartScreen muestra una advertencia, haz clic en "Más información" y luego en "Ejecutar de todas formas".',
    'dl.srcLabel':'O ejecuta desde el código fuente:',

    'foot.tagline':'Panel de control visual para servidores de Minecraft: Java Edition.',
    'foot.project':'Proyecto','foot.changelog':'Registro de cambios','foot.license':'Licencia (Apache-2.0)',
    'foot.community':'Comunidad','foot.issues':'Problemas','foot.contributing':'Contribuir',
    'foot.disclaimer':'ObserverLauncher es una herramienta comunitaria no oficial, no afiliada con Mojang ni Microsoft.',
    'foot.eula':'Requiere aceptar el EULA de Minecraft. No se distribuyen archivos propietarios de Mojang.',
    'cl.eyebrow':'HISTORIAL','cl.title':'Registro de cambios','cl.sub':'Historial directo del repositorio.','cl.loading':'Cargando…','cl.versions':'VERSIONES',
  },

  'pt-BR':{
    'nav.why':'Por que Observer','nav.showcase':'Recursos','nav.software':'Softwares','nav.ai':'IA / MCP',
    'nav.faq':'Perguntas','nav.download':'Baixar','nav.changelog':'Changelog','nav.back':'Início',
    'cta.download':'Baixar','cta.getStarted':'Baixar ObserverLauncher','cta.github':'Ver no GitHub',

    'hero.badge':'Nova versão 6.1.0 • Grátis e Código Aberto',
    'hero.title':'Crie seu servidor de Minecraft em 60 segundos.<br>Sem comandos de terminal.',
    'hero.lead':'O ObserverLauncher cuida de Java, firewall e configurações automaticamente. Chame seus amigos com túneis integrados sem mexer no roteador.',
    'hero.fact1':'Sem conta','hero.fact2':'100% Local no seu PC','hero.fact3':'Zero telemetria','hero.fact4':'Windows e Linux',

    'why.eyebrow':'POR QUE OBSERVERLAUNCHER','why.title':'Diga adeus a erros de terminal e dores de cabeça com roteador.','why.sub':'Tudo o que você precisa para jogar junto em um app simples e moderno.',
    'why.c1tag':'100% Automático','why.c1t':'Zero erros de versão do Java','why.c1d':'Minecraft 1.21 precisa do Java 21; 1.12 precisa do Java 8. O ObserverLauncher baixa e isola o Java exato para cada servidor automaticamente.',
    'why.c2tag':'Sem Abrir Portas','why.c2t':'Jogue com amigos em 1 clique','why.c2d':'Chega de configurar roteador. Com túneis integrados (Playit.gg / Pinggy), você tem um link público para compartilhar na hora.',
    'why.c3tag':'Proteção Total','why.c3t':'Marketplace seguro de Mods e Plugins','why.c3d':'Instale mods e plugins do Modrinth e Hangar diretamente no app. O detector avisa sobre conflitos antes que travem seu mundo.',
    'why.c4tag':'Tranquilidade','why.c4t':'Inspetor 3D e backups em 1 clique','why.c4d':'Veja skins 3D e inventários dos amigos, mapas em tempo real e faça backups em ZIP automáticos.',

    'showcase.eyebrow':'VEJA EM AÇÃO','showcase.title':'Feito para jogadores, não para administradores de TI.','showcase.sub':'Interface visual agradável e intuitiva para hospedar servidores.',
    'showcase.tab1':'Visão Geral','showcase.tab2':'Inspetor de Jogadores 3D','showcase.tab3':'Mapa do Mundo','showcase.tab4':'Assistente IA / MCP',
    'showcase.p1tag':'Painel ao Vivo','showcase.p1t':'Acompanhe seu servidor em um piscar de olhos','showcase.p1d':'Gráficos de TPS, MSPT, RAM e CPU em tempo real. Alertas em linguagem clara se houver lentidão.',
    'showcase.p1b1':'Inicie e pare o servidor com salvamento automático',
    'showcase.p1b2':'Gráficos em tempo real com diagnóstico de lag',
    'showcase.p1b3':'Modo Iniciante para simplificar a interface',
    'showcase.p2tag':'Inspeção 3D','showcase.p2t':'Skins reais, inventário e armaduras','showcase.p2d':'Visualize jogadores em modelos 3D rotativos com skin real e inspecione inventário e Ender Chest item por item.',
    'showcase.p2b1':'Modelo 3D interativo com armadura e skin real',
    'showcase.p2b2':'Grade de inventário com itens de mods inclusos',
    'showcase.p2b3':'Gerencie jogadores com um único clique',
    'showcase.p3tag':'Visualização','showcase.p3t':'Explore o mapa do servidor em tempo real','showcase.p3d':'Renderizado direto dos arquivos do mundo: biomas, terreno e posições dos jogadores com marcadores.',
    'showcase.p3b1':'Mapa gerado diretamente dos chunks salvos',
    'showcase.p3b2':'Coordenadas em tempo real de jogadores e spawn',
    'showcase.p3b3':'Crie pontos de interesse personalizados',
    'showcase.p4tag':'Automação','showcase.p4t':'Conecte Claude ou ChatGPT para gerenciar','showcase.p4d':'Servidor MCP integrado. Peça para a IA analisar logs de erro ou montar modpacks em linguagem natural.',
    'showcase.p4b1':'Diagnóstico de Crash com explicações claras',
    'showcase.p4b2':'Criação de modpacks com checagem de compatibilidade',
    'showcase.p4b3':'Segurança 100% em Localhost com tokens por sessão',

    'soft.eyebrow':'COMPATIBILIDADE','soft.title':'Roda todos os seus softwares de servidor favoritos.','soft.sub':'Versões carregadas em tempo real dos repositórios oficiais.',

    'ai.eyebrow':'SUPERPODER OPCIONAL','ai.title':'Deixe a IA cuidar da parte técnica.','ai.lead':'O ObserverLauncher atua como servidor MCP local. Conecte ao Claude Desktop ou ChatGPT para gerenciar seu servidor conversando.',
    'ai.p1t':'Médico do Servidor','ai.p1d':'Pergunte: "Por que o servidor caiu?" A IA analisa os logs e indica a solução.',
    'ai.p2t':'Modpacks em Linguagem Natural','ai.p2d':'Diga: "Instale mods de otimização para Fabric 1.21.1." A IA cuida de tudo.',
    'ai.p3t':'Local e Seguro','ai.p3d':'Opera somente em 127.0.0.1 com aprovação explícita para modificações.',

    'faq.eyebrow':'TRANSPARÊNCIA','faq.title':'Perguntas Frequentes','faq.sub':'Tudo o que você precisa saber sobre o ObserverLauncher.',
    'trust.t1':'100% Local','trust.d1':'Seus mundos e dados nunca saem do seu computador.',
    'trust.t2':'Sem Conta','trust.d2':'Sem cadastros, e-mails ou login na nuvem.',
    'trust.t3':'Zero Telemetria','trust.d3':'Sem rastreamento em segundo plano ou anúncios.',
    'trust.t4':'Sem Consumo Ocioso','trust.d4':'Fechar o app libera 100% da memória e do processador.',
    'faq.q1':'Preciso pagar alguma coisa?','faq.a1':'Não! O ObserverLauncher é 100% gratuito e de código aberto (Apache-2.0). Roda no seu próprio PC.',
    'faq.q2':'Amigos no celular (Bedrock) podem jogar?','faq.a2':'Sim! Suporta GeyserMC em 1 clique para jogadores de celular e console jogarem no seu servidor Java.',
    'faq.q3':'Como meus amigos entram sem abrir portas no roteador?','faq.a3':'Ative o túnel integrado (Playit.gg / Pinggy) na aba de Rede para gerar um endereço público instantâneo.',
    'faq.q4':'Meu PC vai ficar lento quando eu não estiver jogando?','faq.a4':'Não. Ao parar o servidor ou fechar o app, todos os processos são finalizados imediatamente.',

    'dl.eyebrow':'BAIXAR GRÁTIS','dl.title':'Comece seu mundo em 60 segundos.','dl.sub':'Escolha seu sistema operacional. Atualizações automáticas inclusas.',
    'dl.recWin':'Recomendado para seu PC','dl.recLinux':'Recomendado para seu PC',
    'dl.win':'ObserverLauncher-6.1.0-setup.exe','dl.winDesc':'Instalador 64-bit com atualização automática',
    'dl.linux':'ObserverLauncher-6.1.0.AppImage','dl.linuxDesc':'AppImage universal para Ubuntu, Fedora e Arch',
    'dl.signing':'Aviso para Windows: se o SmartScreen emitir um aviso, clique em "Mais informações" e depois em "Executar mesmo assim".',
    'dl.srcLabel':'Ou execute a partir do código fonte:',

    'foot.tagline':'Painel visual para servidores de Minecraft: Java Edition.',
    'foot.project':'Projeto','foot.changelog':'Changelog','foot.license':'Licença (Apache-2.0)',
    'foot.community':'Comunidade','foot.issues':'Problemas','foot.contributing':'Contribuir',
    'foot.disclaimer':'Ferramenta comunitária não oficial, sem afiliação com Mojang ou Microsoft.',
    'foot.eula':'Requer aceitar o EULA do Minecraft. Nenhum arquivo proprietário é distribuído.',
    'cl.eyebrow':'HISTÓRICO','cl.title':'Changelog','cl.sub':'Histórico oficial direto do repositório.','cl.loading':'Carregando…','cl.versions':'VERSÕES',
  },

  de:{
    'nav.why':'Warum Observer','nav.showcase':'Showcase','nav.software':'Software','nav.ai':'KI / MCP',
    'nav.faq':'FAQ','nav.download':'Download','nav.changelog':'Changelog','nav.back':'Startseite',
    'cta.download':'Download','cta.getStarted':'ObserverLauncher herunterladen','cta.github':'Auf GitHub ansehen',

    'hero.badge':'Neue Version 6.1.0 • Kostenlos & Open Source',
    'hero.title':'Starte deinen Minecraft-Server in 60 Sekunden.<br>Ganz ohne Terminal.',
    'hero.lead':'ObserverLauncher installiert Java, Firewall-Regeln und Konfigurationsdateien automatisch. Teile deinen Server über integrierte Tunnel mit Freunden — ganz ohne Router-Portfreigabe.',
    'hero.fact1':'Kein Account nötig','hero.fact2':'100% Lokal auf deinem PC','hero.fact3':'Keine Telemetrie','hero.fact4':'Windows & Linux',

    'why.eyebrow':'WARUM OBSERVERLAUNCHER','why.title':'Schluss mit Terminal-Befehlen und Router-Frust.','why.sub':'Alles, was du für gemeinsame Minecraft-Abenteuer brauchst, in einer übersichtlichen App.',
    'why.c1tag':'100% Automatisch','why.c1t':'Keine Java-Versionsfehler mehr','why.c1d':'Minecraft 1.21 braucht Java 21; 1.12 braucht Java 8. ObserverLauncher lädt und isoliert die passende Java-Version automatisch für jeden Server.',
    'why.c2tag':'Ohne Portfreigabe','why.c2t':'Mit Freunden spielen per Klick','why.c2d':'Kein lästiges Anmelden im Router. Dank integrierter Tunnel (Playit.gg / Pinggy) erhältst du sofort eine öffentliche Adresse zum Teilen.',
    'why.c3tag':'Absturzschutz','why.c3t':'Sicherer Mod- & Plugin-Marktplatz','why.c3d':'Installiere Mods und Plugins direkt aus Modrinth und Hangar. Die Konflikterkennung warnt dich vor Inkompatibilitäten, bevor dein Server abstürzt.',
    'why.c4tag':'Sicherheit','why.c4t':'3D-Spieler-Inspektor & 1-Klick-Backups','why.c4d':'Untersuche 3D-Skins und Inventare von Freunden, behalte die Live-Karte im Blick und erstelle automatische Backups vor Mod-Experimenten.',

    'showcase.eyebrow':'IN AKTION ERLEBEN','showcase.title':'Entwickelt für Spieler, nicht für Rechenzentren.','showcase.sub':'Eine intuitive Benutzeroberfläche, mit der Serververwaltung Spaß macht.',
    'showcase.tab1':'Übersicht & Steuerung','showcase.tab2':'3D-Spieler-Inspektor','showcase.tab3':'Live-Weltkarte','showcase.tab4':'KI / MCP Assistent',
    'showcase.p1tag':'Live-Dashboard','showcase.p1t':'Deinen Server auf einen Blick überwachen','showcase.p1d':'Echtzeit-Diagramme für TPS, MSPT, CPU und RAM. Verständliche Warnungen bei Lag. Starten, Stoppen und Neustarten mit einem Klick.',
    'showcase.p1b1':'Sofortiger Start und Stopp mit automatischem Weltspeichern',
    'showcase.p1b2':'Echtzeit-Graphen mit automatischer Lag-Ursachendiagnose',
    'showcase.p1b3':'Einsteiger-Modus zum Ausblenden komplexer Optionen',
    'showcase.p2tag':'3D-Inspektion','showcase.p2t':'Echte Skins, Inventare und Rüstungen','showcase.p2d':'Betrachte Spieler als rotierbare 3D-Modelle mit echtem Skin. Sieh das genaue Inventar und die Enderkiste mit echten Icons.',
    'showcase.p2b1':'Rotierbares 3D-Modell mit Skin und getragener Rüstung',
    'showcase.p2b2':'Interaktives Inventar inklusive Mod-Gegenständen',
    'showcase.p2b3':'Spieler kicken, bannen oder OP vergeben mit einem Klick',
    'showcase.p3tag':'Visualisierung','showcase.p3t':'Die Welt in Echtzeit erkunden','showcase.p3d':'Direkt aus den Weltdateien generiert: Entdecktes Terrain, Biome, Spielerkoordinaten und eigene Wegpunkte.',
    'showcase.p3b1':'Echtzeit-Karte generiert aus den gespeicherten Chunks',
    'showcase.p3b2':'Live-Koordinaten der Spieler und Spawn-Punkt',
    'showcase.p3b3':'Erstelle Wegpunkte für Basen, Minen und Portale',
    'showcase.p4tag':'Automation','showcase.p4t':'Claude oder ChatGPT zur Serververwaltung nutzen','showcase.p4d':'Mit integriertem MCP-Server. Bitte deine Lieblings-KI in natürlicher Sprache um Crash-Analysen oder Modpack-Zusammenstellungen.',
    'showcase.p4b1':'Crash-Doktor: Die KI erklärt Fehlerursachen verständlich',
    'showcase.p4b2':'Modpack-Erstellung in natürlicher Sprache mit Kompatibilitätscheck',
    'showcase.p4b3':'100% Localhost-Sicherheit mit neuen Tokens pro Sitzung',

    'soft.eyebrow':'KOMPATIBILITÄT','soft.title':'Unterstützt deine Lieblings-Serversoftware.','soft.sub':'Versionslisten laden direkt von den offiziellen Repositories.',

    'ai.eyebrow':'OPTIONALE SUPERKRAFT','ai.title':'Lass die KI technische Aufgaben erledigen.','ai.lead':'ObserverLauncher fungiert als lokaler MCP-Server. Verbinde ihn mit Claude Desktop oder ChatGPT für sprachgesteuerte Serververwaltung.',
    'ai.p1t':'Server-Crash-Doktor','ai.p1d':'Frage: "Warum ist der Server abgestürzt?" Die KI liest die Logs und nennt die Lösung.',
    'ai.p2t':'Modpacks per Sprache','ai.p2d':'Sage: "Installiere Optimierungs-Mods für Fabric 1.21.1." Die KI prüft und bereitet alles vor.',
    'ai.p3t':'Lokal und sicher','ai.p3d':'Läuft nur auf 127.0.0.1. Jede Änderung erfordert deine ausdrückliche Bestätigung.',

    'faq.eyebrow':'TRANSPARENT','faq.title':'Häufig gestellte Fragen','faq.sub':'Alles Wissenswerte über ObserverLauncher.',
    'trust.t1':'100% Lokal','trust.d1':'Deine Welten und Daten verlassen niemals deinen PC.',
    'trust.t2':'Kein Account','trust.d2':'Keine Registrierung, keine Passwörter, kein Cloud-Zwang.',
    'trust.t3':'Keine Telemetrie','trust.d3':'Kein Tracking im Hintergrund, keine Werbung.',
    'trust.t4':'Kein Leerlauf-Verbrauch','trust.d4':'Schließen der App gibt 100% Speicher und CPU sofort frei.',
    'faq.q1':'Muss ich etwas bezahlen?','faq.a1':'Nein, ObserverLauncher ist 100% kostenlos und quelloffen (Apache-2.0). Der Server läuft direkt auf deinem PC.',
    'faq.q2':'Können Freunde vom Smartphone (Bedrock) beitreten?','faq.a2':'Ja! Mit 1-Klick-GeyserMC können Handy-, Konsolen- und PC-Spieler gemeinsam in derselben Java-Welt spielen.',
    'faq.q3':'Wie treten Freunde ohne Portfreigabe bei?','faq.a3':'Aktiviere einfach den integrierten Tunnel (Playit.gg / Pinggy) im Reiter Netzwerk, um eine öffentliche Adresse zu erhalten.',
    'faq.q4':'Wird mein PC langsamer, wenn ich nicht spiele?','faq.a4':'Nein. Wenn du den Server stoppst oder die App schließt, werden alle Prozesse sofort beendet.',

    'dl.eyebrow':'KOSTENLOSER DOWNLOAD','dl.title':'Starte deine Welt in 60 Sekunden.','dl.sub':'Wähle dein Betriebssystem. Automatische Updates sind integriert.',
    'dl.recWin':'Empfohlen für deinen PC','dl.recLinux':'Empfohlen für deinen PC',
    'dl.win':'ObserverLauncher-6.1.0-setup.exe','dl.winDesc':'64-Bit Installer mit automatischem Updater',
    'dl.linux':'ObserverLauncher-6.1.0.AppImage','dl.linuxDesc':'Universelles AppImage für Ubuntu, Fedora, Arch',
    'dl.signing':'Hinweis für Windows: Falls SmartScreen warnt, klicke auf "Weitere Informationen" und dann auf "Trotzdem ausführen".',
    'dl.srcLabel':'Oder direkt aus dem Quellcode ausführen:',

    'foot.tagline':'Visuelle Steuerzentrale für Minecraft: Java Edition Server.',
    'foot.project':'Projekt','foot.changelog':'Changelog','foot.license':'Lizenz (Apache-2.0)',
    'foot.community':'Community','foot.issues':'Issues','foot.contributing':'Mitwirken',
    'foot.disclaimer':'Inoffizielles Community-Tool, nicht mit Mojang oder Microsoft verbunden.',
    'foot.eula':'Erfordert die Zustimmung zum Minecraft EULA. Keine geschützten Mojang-Dateien enthalten.',
    'cl.eyebrow':'HISTORIE','cl.title':'Changelog','cl.sub':'Direkt aus dem offiziellen Repository geladen.','cl.loading':'Lade Changelog…','cl.versions':'VERSIONEN',
  },

  ru:{
    'nav.why':'Преимущества','nav.showcase':'Возможности','nav.software':'Ядра','nav.ai':'ИИ / MCP',
    'nav.faq':'Вопросы','nav.download':'Скачать','nav.changelog':'История изменений','nav.back':'Главная',
    'cta.download':'Скачать','cta.getStarted':'Скачать ObserverLauncher','cta.github':'Открыть на GitHub',

    'hero.badge':'Новая версия 6.1.0 • Бесплатно и с открытым кодом',
    'hero.title':'Запустите сервер Minecraft за 60 секунд.<br>Без командной строки.',
    'hero.lead':'ObserverLauncher автоматически настраивает Java, брандмауэр и параметры сервера. Приглашайте друзей через встроенные туннели без настройки роутера.',
    'hero.fact1':'Без аккаунтов','hero.fact2':'100% Локально на вашем ПК','hero.fact3':'Без телеметрии','hero.fact4':'Windows и Linux',

    'why.eyebrow':'ПОЧЕМУ OBSERVERLAUNCHER','why.title':'Забудьте об ошибках в консоли и настройке портов.','why.sub':'Всё необходимое для совместной игры в понятном графическом приложении.',
    'why.c1tag':'100% Автоматически','why.c1t':'Никаких проблем с версиями Java','why.c1d':'Для Minecraft 1.21 нужна Java 21, а для 1.12 — Java 8. ObserverLauncher сам скачивает и изолирует нужную версию Java для каждого сервера.',
    'why.c2tag':'Без проброса портов','why.c2t':'Игра с друзьями в один клик','why.c2d':'Не нужно заходить в настройки роутера. Встроенные туннели (Playit.gg / Pinggy) мгновенно дают публичный адрес для друзей.',
    'why.c3tag':'Защита от сбоев','why.c3t':'Безопасный каталог модов и плагинов','why.c3d':'Устанавливайте моды и плагины из Modrinth и Hangar. Детектор конфликтов предупредит о несовместимости до сбоя сервера.',
    'why.c4tag':'Спокойствие','why.c4t':'3D-осмотр игроков и бэкапы в 1 клик','why.c4d':'Просматривайте 3D-скины и инвентарь друзей, следите за картой мира и создавайте резервные копии в ZIP перед экспериментами.',

    'showcase.eyebrow':'В ДЕЙСТВИИ','showcase.title':'Создан для игроков, а не для сисадминов.','showcase.sub':'Удобный и красивый интерфейс для комфортного управления сервером.',
    'showcase.tab1':'Обзор и управление','showcase.tab2':'3D-инспектор игроков','showcase.tab3':'Живая карта мира','showcase.tab4':'Помощник ИИ / MCP',
    'showcase.p1tag':'Панель управления','showcase.p1t':'Контроль состояния сервера в реальном времени','showcase.p1d':'Графики TPS, MSPT, памяти и процессора. Понятные подсказки при возникновении лагов. Запуск, остановка и перезагрузка одной кнопкой.',
    'showcase.p1b1':'Мгновенный запуск и остановка с автосохранением мира',
    'showcase.p1b2':'Графики нагрузки с диагностикой причин просадок TPS',
    'showcase.p1b3':'Режим новичка для скрытия сложных параметров',
    'showcase.p2tag':'3D-инспекция','showcase.p2t':'Реальные скины, инвентарь и броня','showcase.p2d':'Просматривайте игроков с вращающимися 3D-моделями в их скинах. Полный просмотр инвентаря и сундука Края, включая предметы из модов.',
    'showcase.p2b1':'Вращающаяся 3D-модель со скином и надетой бронёй',
    'showcase.p2b2':'Интерактивная сетка инвентаря с предметами из модов',
    'showcase.p2b3':'Кикайте, баньте или выдавайте OP в один клик',
    'showcase.p3tag':'Визуализация','showcase.p3t':'Исследуйте мир сервера в реальном времени','showcase.p3d':'Генерируется прямо из файлов сохранений: исследованные биомы, координаты игроков и настраиваемые путевые метки.',
    'showcase.p3b1':'Карта местности и биомов прямо из чанков сохранения',
    'showcase.p3b2':'Координаты игроков в реальном времени и точка спавна',
    'showcase.p3b3':'Создавайте метки баз, шахт и порталов',
    'showcase.p4tag':'Автоматизация','showcase.p4t':'Управляйте сервером через Claude или ChatGPT','showcase.p4d':'Встроенный сервер MCP. Общайтесь с ИИ на естественном языке для анализа логов сбоев или сборки модов.',
    'showcase.p4b1':'Доктор сбоев: ИИ объяснит причину краша простыми словами',
    'showcase.p4b2':'Сборка модпаков по запросу с проверкой совместимости',
    'showcase.p4b3':'Безопасность: работа строго на localhost с токенами сессии',

    'soft.eyebrow':'СОВМЕСТИМОСТЬ','soft.title':'Поддерживает все популярные ядра.','soft.sub':'Списки версий загружаются напрямую из официальных источников.',

    'ai.eyebrow':'СУПЕРСИЛА ПО ЖЕЛАНИЮ','ai.title':'Доверьте рутину искусственному интеллекту.','ai.lead':'ObserverLauncher работает как локальный сервер MCP. Подключите Claude Desktop или ChatGPT для управления сервером через диалог.',
    'ai.p1t':'Анализ падений сервера','ai.p1d':'Спросите: "Почему упал сервер?" ИИ прочитает логи и укажет на конфликтующий мод.',
    'ai.p2t':'Сборка модов через чат','ai.p2d':'Напишите: "Установи моды оптимизации для Fabric 1.21.1." ИИ проверит совместимость и подготовит установку.',
    'ai.p3t':'Локально и безопасно','ai.p3d':'Работает только на 127.0.0.1. Любое изменение требует вашего согласия.',

    'faq.eyebrow':'ПРОЗРАЧНОСТЬ','faq.title':'Часто задаваемые вопросы','faq.sub':'Всё, что нужно знать о запуске сервера через ObserverLauncher.',
    'trust.t1':'100% Локально','trust.d1':'Файлы миров и данные никогда не покидают ваш ПК.',
    'trust.t2':'Без учетных записей','trust.d2':'Без регистраций, почты и облачных сервисов.',
    'trust.t3':'Без телеметрии','trust.d3':'Никакого скрытого сбора данных и рекламы.',
    'trust.t4':'Без нагрузки в простое','trust.d4':'При закрытии освобождается 100% оперативной памяти и ЦП.',
    'faq.q1':'Нужно ли платить за что-либо?','faq.a1':'Нет, ObserverLauncher на 100% бесплатен и имеет открытый исходный код (Apache-2.0). Сервер работает на вашем оборудовании.',
    'faq.q2':'Могут ли друзья с телефонов (Bedrock) играть со мной?','faq.a2':'Да! Поддержка GeyserMC в 1 клик позволяет игрокам с телефонов, консолей и ПК играть вместе на одном Java-сервере.',
    'faq.q3':'Как друзьям подключиться без проброса портов?','faq.a3':'Включите встроенный туннель (Playit.gg / Pinggy) во вкладке Сеть и отправьте друзьям сгенерированный публичный адрес.',
    'faq.q4':'Будет ли компьютер тормозить, когда сервер выключен?','faq.a4':'Нет. При остановке сервера или закрытии программы все фоновые процессы завершаются моментально.',

    'dl.eyebrow':'СКАЧАТЬ БЕСПЛАТНО','dl.title':'Запустите свой мир за 60 секунд.','dl.sub':'Выберите вашу операционную систему. Автоматические обновления включены.',
    'dl.recWin':'Рекомендуется для вашего ПК','dl.recLinux':'Рекомендуется для вашего ПК',
    'dl.win':'ObserverLauncher-6.1.0-setup.exe','dl.winDesc':'64-битный установщик с автообновлением',
    'dl.linux':'ObserverLauncher-6.1.0.AppImage','dl.linuxDesc':'Универсальный AppImage для Ubuntu, Fedora, Arch',
    'dl.signing':'Примечание для Windows: при предупреждении SmartScreen нажмите "Подробнее", затем "Выполнить в любом случае".',
    'dl.srcLabel':'Или запустите напрямую из исходного кода:',

    'foot.tagline':'Графическая панель управления серверами Minecraft: Java Edition.',
    'foot.project':'Проект','foot.changelog':'История изменений','foot.license':'Лицензия (Apache-2.0)',
    'foot.community':'Сообщество','foot.issues':'Сообщить об ошибке','foot.contributing':'Внести вклад',
    'foot.disclaimer':'Неофициальный инструмент сообщества, не связанный с Mojang или Microsoft.',
    'foot.eula':'Требует принятия EULA Minecraft. Проприетарные ресурсы Mojang не включены.',
    'cl.eyebrow':'ИСТОРИЯ','cl.title':'История изменений','cl.sub':'Загружается напрямую из официального репозитория.','cl.loading':'Загрузка…','cl.versions':'ВЕРСИИ',
  },

  'zh-CN':{
    'nav.why':'为何选择','nav.showcase':'功能展示','nav.software':'服务端','nav.ai':'AI / MCP',
    'nav.faq':'常见问题','nav.download':'下载','nav.changelog':'更新日志','nav.back':'首页',
    'cta.download':'下载','cta.getStarted':'下载 ObserverLauncher','cta.github':'在 GitHub 查看',

    'hero.badge':'最新 6.1.0 版本 • 免费且开源',
    'hero.title':'60秒内开好你的 Minecraft 服务器。<br>无需任何终端命令。',
    'hero.lead':'ObserverLauncher 自动安装匹配的 Java、配置防火墙与服务端参数。内置内网穿透隧道，无需设置路由器端口映射即可邀请好友联机。',
    'hero.fact1':'无需注册账号','hero.fact2':'100% 本地运行','hero.fact3':'零数据收集与追踪','hero.fact4':'支持 Windows 与 Linux',

    'why.eyebrow':'为何选择 OBSERVERLAUNCHER','why.title':'告别黑框命令行与路由器映射的烦恼。','why.sub':'专为普通玩家打造的现代化图形控制面板，让好友联机变得轻松愉快。',
    'why.c1tag':'100% 自动管理','why.c1t':'彻底告别 Java 版本不匹配','why.c1d':'Minecraft 1.21 需要 Java 21，而 1.12 需要 Java 8。ObserverLauncher 会自动检测并下载对应 Java，独立运行，不污染你的系统环境。',
    'why.c2tag':'无需端口映射','why.c2t':'一键与好友远程联机','why.c2d':'无需登录路由器后台配置 NAT 端口。内置 Tunnel 穿透隧道（Playit.gg / Pinggy），一键生成公网地址发给朋友即可加入。',
    'why.c3tag':'防崩溃保障','why.c3t':'安全的 Mod 与插件市场','why.c3d':'在应用内直接搜索安装 Modrinth 和 Hangar 资源。内置冲突检测器，在破坏世界之前提前拦截重复或不兼容的模组。',
    'why.c4tag':'安心省心','why.c4t':'3D 玩家查看器与一键备份','why.c4d':'直观查看好友的 3D 皮肤与背包物品，浏览实时卫星地图，在尝试新模组前自动打好 ZIP 备份，随时安全恢复。',

    'showcase.eyebrow':'实际界面展示','showcase.title':'专为玩家打造，拒绝冰冷复杂。','showcase.sub':'直观清晰的图形界面，让开服与管理一目了然。',
    'showcase.tab1':'概览与控制','showcase.tab2':'3D 玩家查看器','showcase.tab3':'实时卫星地图','showcase.tab4':'AI / MCP 助手',
    'showcase.p1tag':'实时监控面板','showcase.p1t':'一眼掌控服务器全部运行状态','showcase.p1d':'实时 TPS、MSPT、内存与 CPU 走势图。当服务器发生卡顿时以通俗易懂的语言提示原因。一键启动、停止或重启。',
    'showcase.p1b1':'瞬间启动与安全停止，内置自动保存机制',
    'showcase.p1b2':'实时内存与 tick 曲线图，附带卡顿原因排查',
    'showcase.p1b3':'新手简易模式可隐藏深层进阶选项',
    'showcase.p2tag':'3D 玩家透视','showcase.p2t':'真实皮肤渲染、背包与装备','showcase.p2d':'查看在线、白名单或封禁玩家。支持 3D 可旋转模型展示实际皮肤与护甲，甚至能看清末影箱与模组物品。',
    'showcase.p2b1':'可自由旋转的 3D 玩家模型与穿戴护甲',
    'showcase.p2b2':'交互式背包网格，完美支持模组自定义物品',
    'showcase.p2b3':'一键踢出、封禁、授予 OP 或管理白名单',
    'showcase.p3tag':'世界透视','showcase.p3t':'实时探索服务器世界地图','showcase.p3d':'直接读取存档生成：查看已探索地形、生物群系、出生点位置及玩家实时坐标，支持自由添加路标点。',
    'showcase.p3b1':'直接从区块数据生成的高清地形与生物群系地图',
    'showcase.p3b2':'玩家实时坐标追踪与出生点标记',
    'showcase.p3b3':'标记并快速传送到重要坐标（基地、地狱门、矿洞）',
    'showcase.p4tag':'智能化控制','showcase.p4t':'连接 Claude 或 ChatGPT 托管服务器','showcase.p4d':'内置 Model Context Protocol (MCP) 服务端。用自然语言让 AI 协助诊断崩溃日志、挑选插件或配置整合包。',
    'showcase.p4b1':'崩溃医生：AI 通俗解释崩溃日志并提供修复建议',
    'showcase.p4b2':'自然语言一键搜索并配置兼容的模组整合包',
    'showcase.p4b3':'100% 局域网安全性，每次启动使用全新随机令牌',

    'soft.eyebrow':'兼容性','soft.title':'支持所有你喜爱的服务端核心。','soft.sub':'版本列表直接同步官方源，Minecraft 官方发布新版本后即刻支持。',

    'ai.eyebrow':'进阶超能力','ai.title':'让 AI 帮你处理繁琐的技术活。','ai.lead':'ObserverLauncher 支持 MCP 协议。你可以直接连接 Claude Desktop 或 ChatGPT，通过简单聊天完成故障排查和模组管理。',
    'ai.p1t':'服务器崩溃医生','ai.p1d':'遇到报错只需问 AI：“服务器为什么崩溃了？”AI 会自动读取日志并指出冲突模组。',
    'ai.p2t':'自然语言配置整合包','ai.p2d':'例如：“帮我安装 Fabric 1.21.1 的优化模组和语音聊天。”AI 将自动比对版本并准备就绪。',
    'ai.p3t':'安全可靠的本地环境','ai.p3d':'仅在 127.0.0.1 监听，任何写入或删除操作均需你手动确认。',

    'faq.eyebrow':'透明公开','faq.title':'常见问题解答','faq.sub':'关于使用 ObserverLauncher 本地开服你所关心的事。',
    'trust.t1':'100% 本地存储','trust.d1':'世界存档与配置数据绝不会离开你的电脑。',
    'trust.t2':'无需注册账号','trust.d2':'无邮箱收集、无登录门槛、无云端绑定。',
    'trust.t3':'零数据收集','trust.d3':'无任何后台行为追踪，无弹窗与广告。',
    'trust.t4':'零闲置占用','trust.d4':'关闭软件即刻释放 100% 内存和 CPU，无残留进程。',
    'faq.q1':'开服需要付费吗？','faq.a1':'完全免费。ObserverLauncher 采用 Apache-2.0 开源协议。服务器直接运行在你的电脑上，无需支付任何月租。',
    'faq.q2':'手机版（Bedrock/基岩版）朋友能进吗？','faq.a2':'可以！内置一键支持 GeyserMC 跨平台联机，手机、主机和电脑玩家可以在同一个 Java 世界里游玩。',
    'faq.q3':'没有公网 IP 且不会映射端口怎么联机？','faq.a3':'只需在“网络”选项中启用内置 Tunnel 隧道（Playit.gg 或 Pinggy），即可生成专属公网地址发给朋友联机。',
    'faq.q4':'不开服的时候会拖慢我的电脑吗？','faq.a4':'完全不会。点击停止或退出软件后，所有服务器与运行进程会立即彻底终止，没有任何后台驻留。',

    'dl.eyebrow':'免费下载','dl.title':'60秒内开启属于你的世界。','dl.sub':'选择适合你电脑的操作系统。支持内置自动更新。',
    'dl.recWin':'为你推荐的系统版本','dl.recLinux':'为你推荐的系统版本',
    'dl.win':'ObserverLauncher-6.1.0-setup.exe','dl.winDesc':'64位 Windows 安装包，内置自动更新',
    'dl.linux':'ObserverLauncher-6.1.0.AppImage','dl.linuxDesc':'适用于 Ubuntu、Fedora、Arch 的通用 AppImage',
    'dl.signing':'Windows 安装提示：由于未购买商业数字签名，SmartScreen 可能弹出安全提醒。点击“更多信息”并选择“仍要运行”即可。',
    'dl.srcLabel':'或者直接从源码运行：',

    'foot.tagline':'专为 Minecraft: Java Edition 服务端设计的现代化桌面控制面板。',
    'foot.project':'项目','foot.changelog':'更新日志','foot.license':'开源协议 (Apache-2.0)',
    'foot.community':'社区','foot.issues':'反馈问题','foot.contributing':'参与贡献',
    'foot.disclaimer':'ObserverLauncher 为非官方社区工具，与 Mojang 或 Microsoft 没有任何从属关系。',
    'foot.eula':'开服需同意 Minecraft EULA 协议。本项目不包含任何 Mojang 商业闭源资产。',
    'cl.eyebrow':'发布历史','cl.title':'更新日志','cl.sub':'每个版本的更新详情，实时拉取自仓库。','cl.loading':'正在加载更新日志…','cl.versions':'版本列表',
  },
  };

  let current='en';
  const t=k=>STR[current]?.[k] ?? STR.en[k] ?? k;

  function apply(){
    document.documentElement.lang=current;
    document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent=t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(el=>{ el.innerHTML=t(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{ el.placeholder=t(el.dataset.i18nPlaceholder); });
    document.dispatchEvent(new CustomEvent('i18n:applied'));
  }

  function set(code){
    if(!STR[code]||code===current) return;
    const doIt=()=>{
      current=code;
      apply();
      updateBtn();
      try{ localStorage.setItem('ol-lang',code); }catch{}
    };
    if(document.startViewTransition) document.startViewTransition(doIt);
    else doIt();
  }

  function updateBtn(){
    const meta=LOCALES_META.find(m=>m.code===current)||LOCALES_META[0];
    const cur=document.getElementById('langCurrent');
    if(cur) cur.textContent=meta.short;
    const menu=document.getElementById('langMenu');
    if(menu) menu.querySelectorAll('li').forEach(li=>li.setAttribute('aria-selected',String(li.dataset.code===current)));
  }

  function buildMenu(){
    const menu=document.getElementById('langMenu');
    if(!menu) return;
    menu.innerHTML=LOCALES_META.map(m=>`<li role="option" data-code="${m.code}">${m.label}<span>${m.short}</span></li>`).join('');
    menu.querySelectorAll('li').forEach(li=>li.addEventListener('click',()=>{
      set(li.dataset.code);
      closeMenu();
    }));
  }

  function openMenu(){
    const m=document.getElementById('langMenu'),b=document.getElementById('langBtn');
    if(!m||!b) return;
    m.hidden=false;
    b.setAttribute('aria-expanded','true');
  }
  function closeMenu(){
    const m=document.getElementById('langMenu'),b=document.getElementById('langBtn');
    if(!m||!b) return;
    m.hidden=true;
    b.setAttribute('aria-expanded','false');
  }

  function init(){
    buildMenu();
    let saved='en';
    try{ saved=localStorage.getItem('ol-lang')||''; }catch{}
    const preferred=(saved&&STR[saved]) ? saved : (navigator.language?.startsWith('vi') ? 'vi' : (navigator.language?.slice(0,2)==='zh' ? 'zh-CN' : 'en'));
    current=preferred;
    apply();
    updateBtn();

    const btn=document.getElementById('langBtn');
    if(btn) btn.addEventListener('click',e=>{
      e.stopPropagation();
      const m=document.getElementById('langMenu');
      if(m&&m.hidden) openMenu(); else closeMenu();
    });
    document.addEventListener('click',closeMenu);
    document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeMenu(); });
  }

  window.OL={ t, setLang:set, get lang(){return current} };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
