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
    'nav.why':'Why Observer','nav.showcase':'Showcase','nav.features':'Features','nav.mcp':'AI / MCP',
    'nav.software':'Software','nav.faq':'FAQ','nav.download':'Download','nav.changelog':'Changelog','nav.back':'Home',
    'cta.download':'Download','cta.getStarted':'Download ObserverLauncher','cta.github':'View on GitHub',

    'hero.badge':'Release 6.1.0 • Free & Open Source',
    'hero.title':'Host your Minecraft server in 60 seconds.<br>No terminal required.',
    'hero.lead':'ObserverLauncher handles Java runtimes, firewall rules, and server configurations automatically. Share a link with your friends through built-in tunnels without touching your router.',
    'hero.fact1':'No account needed','hero.fact2':'Runs locally on your PC','hero.fact3':'No telemetry or tracking','hero.fact4':'Windows & Linux',

    'why.eyebrow':'WHY OBSERVERLAUNCHER','why.title':'Say goodbye to terminal errors and router headaches.','why.sub':'Everything you need to play Minecraft together in one simple, beautiful desktop app.',
    'why.c1tag':'Automated Runtime','why.c1t':'Zero Java mismatch errors','why.c1d':'Minecraft 1.21 needs Java 21; 1.12 needs Java 8. ObserverLauncher automatically detects, downloads and isolates the exact Java runtime required for your server, keeping your computer clean.',
    'why.c2tag':'No Port Forwarding','why.c2t':'Play with friends in 1 click','why.c2d':'No more logging into your router or messing with NAT settings. ObserverLauncher comes with built-in tunneling (Playit.gg / Pinggy) that gives you a public address to share instantly.',
    'why.c3tag':'Crash Prevention','why.c3t':'Safe Mod & Plugin marketplace','why.c3d':'Search and install mods and plugins directly from Modrinth, Hangar, and SpigotMC. The built-in conflict detector warns you of duplicate or incompatible mods before they crash your world.',
    'why.c4tag':'Peace of Mind','why.c4t':'3D Player inspector & 1-click backups','why.c4d':'Inspect your friends\' inventories and 3D skins, view live maps of explored areas, and take automatic ZIP backups before experimenting with new mods so you never lose progress.',

    'showcase.eyebrow':'SEE IT IN ACTION','showcase.title':'Built for humans, not servers in a datacenter.','showcase.sub':'Take a look inside the visual interface designed to make server hosting joyful.',
    'showcase.tab1':'Overview & Control','showcase.tab2':'3D Player Inspector','showcase.tab3':'Live World Map','showcase.tab4':'AI / MCP Settings',
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
    'showcase.p4tag':'Automation Settings','showcase.p4t':'1-Click MCP Setup for AI Assistants','showcase.p4d':'ObserverLauncher features a built-in Model Context Protocol (MCP) server. Copy the ready-to-paste JSON snippet to connect Claude Desktop, ChatGPT, or Cursor in seconds.',
    'showcase.p4b1':'Instant connection config for Claude Desktop and MCP clients',
    'showcase.p4b2':'Full access to 76 specialized Minecraft server management tools',
    'showcase.p4b3':'Restricted to 127.0.0.1 with random per-session authorization tokens',

    'feat.eyebrow':'COMPLETE TOOLKIT','feat.title':'Everything your Minecraft server actually needs.','feat.sub':'Packed with powerful built-in utilities so you don\'t need dozens of third-party scripts.',
    'feat.c1t':'Multi-Instance Management','feat.c1d':'Run and switch between multiple servers in one window. Each server has its own folder, isolated Java runtime, RCON, schedule, and network tunnel.',
    'feat.c2t':'Bedrock Crossplay with Geyser','feat.c2d':'Automatically detect Geyser and Floodgate configuration errors and apply 1-click fixes with file backups. Opens a secondary UDP tunnel for phone and console players.',
    'feat.c3t':'Interactive Live Console','feat.c3d':'Timestamps, log level filters, and search. Player names appearing in console logs are clickable, opening their 3D skin and inventory inspector directly.',
    'feat.c4t':'Daily Scheduler & Discord Webhooks','feat.c4d':'Set daily automatic start/stop times. Post notifications directly to your Discord channel on server boot, graceful stops, unexpected crashes, or player joins.',
    'feat.c5t':'Bulk Mod Updates & Rollback (6.1.0)','feat.c5d':'Update installed mods and plugins in batches across Modrinth and Hangar. Automatically snapshots replaced files with 1-click rollback if a new build causes instability.',
    'feat.c6t':'Historical Metrics & JVM Presets','feat.c6d':'Time series graphs for TPS, MSPT, and RAM persisted to disk from 15 minutes up to 30 days. Includes 1-click JVM optimization flags (Aikar\'s flags, G1GC tuning, ZGC).',
    'feat.c7t':'Config Snapshots & Line Diff','feat.c7d':'A snapshot is automatically saved before every edit to server.properties. Compare line diffs visually and restore any previous revision in one click.',
    'feat.c8t':'Headless CLI & Docker Export','feat.c8d':'Run the entire backend with no desktop window using the observer CLI (JSON scriptable), or export a ready-to-run Dockerfile and compose file for VPS hosting.',

    'mcp.title':'Full Model Context Protocol (MCP) Integration',
    'mcp.sub':'ObserverLauncher exposes 76 specialized server management tools through a local MCP server. Connect Claude Desktop, ChatGPT, or Cursor to control, diagnose, and automate your server with natural language.',
    'mcp.c1tag':'Autonomous Doctor','mcp.c1t':'Server Doctor & Crash Analyzer','mcp.c1d':'The AI executes diagnose_server, explain_crash, and propose_fix to scan console buffers, identify root causes of crashes or memory leaks, and propose actionable, structured fix plans.',
    'mcp.c2tag':'Conversational Modding','mcp.c2t':'Modpack Planning & Dependency Resolution','mcp.c2d':'Search Modrinth, Hangar, SpigotMC, and CurseForge through conversational prompts. Tools like plan_modpack and assemble_modpack resolve dependencies and catch conflicts before installation.',
    'mcp.c3tag':'Content Lifecyle','mcp.c3t':'Smart Updates & Automated Rollbacks','mcp.c3d':'Ask your AI: "Check for mod updates". It scans project registries with check_updates, applies batch updates via update_content, and can execute rollback_content_update if needed.',
    'mcp.c4tag':'Privacy & Safety','mcp.c4t':'Three-Tier Safety & PII Scrubbing','mcp.c4d':'Strict separation of read (free), write (UI confirmation), and destroy (always prompt). IPv4 addresses and emails are scrubbed before sending logs to AI models, and all actions are recorded in an audit log.',
    'mcp.cfgTitle':'Connect to Claude Desktop in claude_desktop_config.json','mcp.cfgHint':'Token is copied from Settings > MCP',

    'soft.eyebrow':'COMPATIBILITY','soft.title':'Runs all your favorite server software.','soft.sub':'Version lists load live from official project repositories so new Minecraft releases are available instantly.',

    'faq.eyebrow':'HONEST & TRANSPARENT','faq.title':'Frequently Asked Questions','faq.sub':'Everything you need to know about hosting locally with ObserverLauncher.',
    'trust.t1':'Local Execution','trust.d1':'Your worlds, configs, and player data stay directly on your PC.',
    'trust.t2':'No Account Needed','trust.d2':'No registration, no emails, no passwords, and no cloud lock-in.',
    'trust.t3':'No Telemetry','trust.d3':'No background tracking, analytics, or third-party ads.',
    'trust.t4':'Clean Shutdown','trust.d4':'Closing the application leaves no background daemon processes.',
    'faq.q1':'Do I have to pay anything to host a server?','faq.a1':'No, ObserverLauncher is free and open-source under the Apache-2.0 license. The server runs directly on your computer hardware, meaning there are no subscriptions or monthly hosting bills.',
    'faq.q2':'Can friends on phones (Minecraft Bedrock) join my Java server?','faq.a2':'Yes! ObserverLauncher provides 1-click Bedrock crossplay support using GeyserMC and Floodgate. Mobile, console, and PC players can join and play together in the same survival world seamlessly.',
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
    'nav.why':'Vì sao nên dùng','nav.showcase':'Trải nghiệm','nav.features':'Tính năng','nav.mcp':'AI / MCP',
    'nav.software':'Nền tảng','nav.faq':'Hỏi đáp','nav.download':'Tải về','nav.changelog':'Changelog','nav.back':'Trang chủ',
    'cta.download':'Tải về','cta.getStarted':'Tải ObserverLauncher','cta.github':'Xem trên GitHub',

    'hero.badge':'Phiên bản 6.1.0 • Miễn phí & Mã nguồn mở',
    'hero.title':'Mở server Minecraft riêng trong 60 giây.<br>Không cần chạm vào dòng lệnh.',
    'hero.lead':'ObserverLauncher tự động tải Java, cấu hình server và mở firewall. Mời bạn bè tham gia qua đường truyền Tunnel tích hợp mà không cần mở port modem.',
    'hero.fact1':'Không cần tài khoản','hero.fact2':'Chạy trực tiếp trên máy bạn','hero.fact3':'Không theo dõi hay thu thập dữ liệu','hero.fact4':'Hỗ trợ Windows & Linux',

    'why.eyebrow':'VÌ SAO NÊN DÙNG OBSERVERLAUNCHER','why.title':'Tạm biệt những ngày vật lộn với cmd và port router.','why.sub':'Mọi công cụ bạn cần để chơi chung một thế giới, được gói gọn trong giao diện đồ họa trực quan.',
    'why.c1tag':'Tự động quản lý Java','why.c1t':'Không còn lỗi phiên bản Java','why.c1d':'Server 1.21 cần Java 21, server 1.12 cần Java 8. ObserverLauncher tự động tải và cách ly đúng bản Java cho từng server, không làm rối máy tính của bạn.',
    'why.c2tag':'Không cần mở Port','why.c2t':'Chơi qua mạng chỉ với 1 cú click','why.c2d':'Ngại đăng nhập vào modem nhà mạng? Tích hợp sẵn Tunnel (Playit / Pinggy), chỉ cần bấm bật là có ngay link chia sẻ để bạn bè vào chơi bất kể khoảng cách.',
    'why.c3tag':'Chống sập server','why.c3t':'Cài Mod/Plugin an toàn từ chợ tích hợp','why.c3d':'Tìm và cài đặt mod/plugin từ Modrinth và Hangar ngay trong app. Tự động kiểm tra tương thích và cảnh báo xung đột phiên bản trước khi làm hỏng thế giới.',
    'why.c4tag':'Trực quan & Yên tâm','why.c4t':'Soi đồ người chơi 3D & Sao lưu 1 chạm','why.c4d':'Xem skin 3D và túi đồ của bạn bè trong server, xem bản đồ vệ tinh live. Tự động sao lưu file thế giới thành file ZIP an toàn để phục hồi bất cứ lúc nào.',

    'showcase.eyebrow':'TRẢI NGHIỆM THỰC TẾ','showcase.title':'Thiết kế cho người chơi, không phải cho quản trị viên máy chủ.','showcase.sub':'Mọi tính năng quan trọng đều hiển thị trực quan và dễ thao tác.',
    'showcase.tab1':'Tổng quan & Quản lý','showcase.tab2':'Soi người chơi & Túi đồ 3D','showcase.tab3':'Bản đồ thế giới Live','showcase.tab4':'Cài đặt AI & MCP',
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
    'showcase.p4tag':'Cài đặt kết nối AI','showcase.p4t':'Thiết lập MCP 1 chạm cho các trợ lý AI','showcase.p4d':'ObserverLauncher tích hợp sẵn máy chủ Model Context Protocol (MCP). Sao chép đoạn mã JSON cấu hình có sẵn để kết nối Claude Desktop, ChatGPT hoặc Cursor chỉ trong vài giây.',
    'showcase.p4b1':'Đoạn mã cấu hình kết nối sẵn sàng cho Claude Desktop và các client MCP',
    'showcase.p4b2':'Mở khóa toàn bộ 76 công cụ quản lý chuyên dụng cho server Minecraft',
    'showcase.p4b3':'Chạy giới hạn trên 127.0.0.1 với mã phiên bảo mật ngẫu nhiên',

    'feat.eyebrow':'BỘ CÔNG CỤ TOÀN DIỆN','feat.title':'Mọi tính năng server Minecraft của bạn thực sự cần.','feat.sub':'Tích hợp sẵn mọi tiện ích chuyên sâu, không cần cài đặt thêm hàng chục script rời rạc.',
    'feat.c1t':'Quản lý nhiều server (Multi-Instance)','feat.c1d':'Chạy và chuyển đổi giữa nhiều server độc lập trong một giao diện. Mỗi server có thư mục, bản Java cách ly, RCON, lịch trình và tunnel riêng biệt.',
    'feat.c2t':'Chơi chéo Bedrock với Geyser & Floodgate','feat.c2d':'Tự động phát hiện lỗi cấu hình port thường gặp và sửa nhanh 1-click. Mở tunnel UDP song song để người chơi điện thoại/console vào cùng thế giới Java.',
    'feat.c3t':'Console tương tác thông minh','feat.c3d':'Bộ lọc cấp độ log, tìm kiếm thời gian thực. Bấm trực tiếp vào tên người chơi trong console log để mở ngay thẻ soi 3D skin và rương đồ.',
    'feat.c4t':'Lên lịch tự động & Discord Webhook','feat.c4d':'Cài đặt giờ bật/tắt server định kỳ mỗi ngày. Tự động gửi thông báo về kênh Discord khi server khởi động, tắt an toàn, bị crash hoặc có người chơi tham gia.',
    'feat.c5t':'Cập nhật Mod hàng loạt & Rollback (6.1.0)','feat.c5d':'Cập nhật mod và plugin hàng loạt từ Modrinth và Hangar. Tự động lưu bản sao lưu tệp cũ và hỗ trợ 1-click rollback nếu bản mới gây mất ổn định.',
    'feat.c6t':'Lưu trữ hiệu năng dài hạn & Cờ JVM','feat.c6d':'Biểu đồ TPS, MSPT và RAM lưu trữ từ 15 phút đến 30 ngày. Tích hợp sẵn bộ cờ JVM tối ưu (Aikar\'s flags, G1GC tuning, ZGC) chỉ với 1 cú click.',
    'feat.c7t':'Lịch sử cấu hình & Trình so sánh Diff','feat.c7d':'Tự động tạo bản chụp trước mỗi lần chỉnh sửa server.properties. Trực quan hóa các dòng thay đổi qua diff viewer và phục hồi bản cũ tức thì.',
    'feat.c8t':'Headless CLI & Xuất file Docker','feat.c8d':'Chạy toàn bộ backend không cần giao diện cửa sổ qua lệnh terminal observer (hỗ trợ xuất JSON), hoặc xuất sẵn Dockerfile và compose cho máy chủ VPS.',

    'mcp.title':'Tích hợp sâu giao thức Model Context Protocol (MCP)',
    'mcp.sub':'ObserverLauncher cung cấp 76 công cụ quản lý chuyên dụng qua máy chủ MCP cục bộ. Kết nối Claude Desktop, ChatGPT hoặc Cursor để điều khiển, chẩn đoán và tự động hóa server bằng tiếng Việt tự nhiên.',
    'mcp.c1tag':'Bác sĩ tự động','mcp.c1t':'Chẩn đoán lỗi & Phân tích nguyên nhân Crash','mcp.c1d':'AI sử dụng diagnose_server, explain_crash và propose_fix để quét buffer console, chỉ ra nguyên nhân gây crash hoặc tràn RAM, và đề xuất kế hoạch sửa lỗi cụ thể.',
    'mcp.c2tag':'Lập kế hoạch Modpack','mcp.c2t':'Tìm kiếm & Giải quyết phụ thuộc tự động','mcp.c2d':'Duyệt Modrinth, Hangar, SpigotMC và CurseForge bằng ngôn ngữ tự nhiên. Các công cụ plan_modpack và assemble_modpack tự động giải quyết dependencies và chặn xung đột trước khi cài đặt.',
    'mcp.c3tag':'Quản lý nội dung','mcp.c3t':'Cập nhật thông minh & Rollback tức thì','mcp.c3d':'Chỉ cần bảo AI: "Kiểm tra bản cập nhật cho các mod". AI sẽ quét registry bằng check_updates, cập nhật bằng update_content và khôi phục bằng rollback_content_update nếu cần.',
    'mcp.c4tag':'An toàn & Bảo mật','mcp.c4t':'Phân quyền 3 cấp độ & Lọc sạch thông tin nhạy cảm','mcp.c4d':'Phân quyền nghiêm ngặt: read (tra cứu), write (xác nhận GUI), destroy (luôn hỏi xác nhận). Tự động lọc sạch IPv4 và email trước khi gửi log ra ngoài cho AI; toàn bộ hành động ghi vào Audit Log.',
    'mcp.cfgTitle':'Cấu hình thêm vào Claude Desktop trong claude_desktop_config.json','mcp.cfgHint':'Lấy token tại Cài đặt > MCP trong ứng dụng',

    'soft.eyebrow':'TƯƠNG THÍCH ĐA DẠNG','soft.title':'Hỗ trợ mọi loại server bạn muốn.','soft.sub':'Danh sách phiên bản cập nhật tự động từ nguồn chính thức của Mojang, PaperMC, Fabric và Forge.',

    'faq.eyebrow':'MINH BẠCH & RÕ RÀNG','faq.title':'Câu hỏi thường gặp','faq.sub':'Những điều bạn cần biết khi tự mở server Minecraft với ObserverLauncher.',
    'trust.t1':'Chạy trực tiếp trên máy','trust.d1':'File thế giới, cấu hình và dữ liệu không bao giờ rời khỏi PC của bạn.',
    'trust.t2':'Không cần tài khoản','trust.d2':'Không đăng ký, không email, không mật khẩu đám mây.',
    'trust.t3':'Không Telemetry','trust.d3':'Không thu thập dữ liệu hành vi, không theo dõi, không quảng cáo.',
    'trust.t4':'Tắt sạch tài nguyên','trust.d4':'Tắt ứng dụng là giải phóng tài nguyên, không có tiến trình chạy ngầm.',
    'faq.q1':'Tôi có phải trả bất kỳ khoản phí nào để mở server không?','faq.a1':'Hoàn toàn không. ObserverLauncher miễn phí theo giấy phép mã nguồn mở Apache-2.0. Server chạy trực tiếp trên phần cứng máy tính của bạn, không có phí duy trì hàng tháng.',
    'faq.q2':'Bạn bè dùng điện thoại (Minecraft Bedrock) có vào chơi chung được không?','faq.a2':'Được! ObserverLauncher tích hợp hỗ trợ GeyserMC và Floodgate chỉ với 1 cú click, giúp người chơi điện thoại, console và máy tính có thể chơi chung trong cùng một thế giới Java.',
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
    'nav.why':'Por qué Observer','nav.showcase':'Demostración','nav.features':'Funciones','nav.mcp':'IA / MCP',
    'nav.software':'Software','nav.faq':'Preguntas','nav.download':'Descarga','nav.changelog':'Registro de cambios','nav.back':'Inicio',
    'cta.download':'Descargar','cta.getStarted':'Descargar ObserverLauncher','cta.github':'Ver en GitHub',

    'hero.badge':'Versión 6.1.0 • Gratis y Código Abierto',
    'hero.title':'Crea tu servidor de Minecraft en 60 segundos.<br>Sin comandos de terminal.',
    'hero.lead':'ObserverLauncher gestiona Java, reglas de firewall y archivos de configuración automáticamente. Invita a tus amigos con túneles integrados sin abrir puertos en tu router.',
    'hero.fact1':'Sin cuenta','hero.fact2':'Ejecución local en tu PC','hero.fact3':'Sin telemetría ni rastreo','hero.fact4':'Windows y Linux',

    'why.eyebrow':'POR QUÉ OBSERVERLAUNCHER','why.title':'Dile adiós a los errores de terminal y al router.','why.sub':'Todo lo que necesitas para jugar Minecraft juntos en una interfaz gráfica moderna.',
    'why.c1tag':'Gestión de Java','why.c1t':'Cero problemas con versiones de Java','why.c1d':'Minecraft 1.21 requiere Java 21; 1.12 necesita Java 8. ObserverLauncher descarga y aísla la versión exacta de Java para cada servidor sin tocar tu sistema.',
    'why.c2tag':'Sin Abrir Puertos','why.c2t':'Juega con amigos en 1 clic','why.c2d':'Olvídate de configurar tu router o NAT. Con túneles integrados (Playit.gg / Pinggy), obtienes una dirección pública para compartir al instante.',
    'why.c3tag':'Prevención de Fallos','why.c3t':'Marketplace seguro de Mods y Plugins','why.c3d':'Instala mods y plugins directamente desde Modrinth y Hangar. El detector de conflictos te avisa de incompatibilidades antes de que tu servidor se caiga.',
    'why.c4tag':'Tranquilidad Total','why.c4t':'Inspector 3D y copias de seguridad en 1 clic','why.c4d':'Inspecciona el inventario y skins en 3D de tus amigos, explora mapas en vivo y haz copias de seguridad ZIP antes de probar nuevos mods.',

    'showcase.eyebrow':'MÍRALO EN ACCIÓN','showcase.title':'Diseñado para jugadores, no para centros de datos.','showcase.sub':'Una interfaz gráfica intuitiva que hace que hospedar servidores sea sencillo.',
    'showcase.tab1':'Panel General','showcase.tab2':'Inspector de Jugadores 3D','showcase.tab3':'Mapa del Mundo en Vivo','showcase.tab4':'Ajustes IA / MCP',
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
    'showcase.p4tag':'Configuración IA','showcase.p4t':'Configuración MCP en 1 clic para asistentes IA','showcase.p4d':'ObserverLauncher incluye servidor MCP integrado. Copia la configuración JSON para conectar Claude Desktop, ChatGPT o Cursor al instante.',
    'showcase.p4b1':'Configuración lista para Claude Desktop y clientes MCP',
    'showcase.p4b2':'Acceso completo a 76 herramientas de gestión de Minecraft',
    'showcase.p4b3':'Conexión segura en 127.0.0.1 con tokens por sesión',

    'feat.eyebrow':'HERRAMIENTAS COMPLETAS','feat.title':'Todo lo que tu servidor de Minecraft realmente necesita.','feat.sub':'Integrado con herramientas avanzadas para que no dependas de scripts externos.',
    'feat.c1t':'Gestión Multi-Instancia','feat.c1d':'Ejecuta y cambia entre múltiples servidores en una sola ventana. Cada servidor tiene carpeta, Java aislado, RCON y túnel independiente.',
    'feat.c2t':'Crossplay Bedrock con Geyser','feat.c2d':'Detecta errores comunes de configuración en Geyser y Floodgate y los repara en 1 clic con copia de seguridad. Abre un túnel UDP para consolas y móviles.',
    'feat.c3t':'Consola Interactiva en Vivo','feat.c3d':'Filtros de nivel y búsqueda. Al hacer clic en el nombre de un jugador en la consola se abre directamente su visor 3D e inventario.',
    'feat.c4t':'Programador Diario y Webhooks Discord','feat.c4d':'Programa horas de inicio y parada automática. Recibe alertas en Discord de inicios, caídas o jugadores conectados.',
    'feat.c5t':'Actualizaciones en Lote y Rollback (6.1.0)','feat.c5d':'Actualiza mods y plugins en lote desde Modrinth y Hangar con copias de seguridad automáticas y reversión en 1 clic si hay problemas.',
    'feat.c6t':'Métricas Históricas y Ajustes JVM','feat.c6d':'Historial de gráficos de TPS, MSPT y RAM guardados en disco de 15 minutos a 30 días. Incluye perfiles de banderas JVM (Aikar, G1GC, ZGC).',
    'feat.c7t':'Historial de Configuración y Diff','feat.c7d':'Copia de seguridad automática antes de cada cambio en server.properties. Compara diferencias visuales línea por línea y restaura al instante.',
    'feat.c8t':'CLI Headless y Exportación Docker','feat.c8d':'Ejecuta el backend sin interfaz gráfica mediante el comando observer en terminal, o exporta Dockerfile y docker-compose listos para VPS.',

    'mcp.title':'Integración Completa con Model Context Protocol (MCP)',
    'mcp.sub':'ObserverLauncher expone 76 herramientas a través de su servidor MCP local. Conecta Claude Desktop, ChatGPT o Cursor para automatizar y diagnosticar tu servidor con lenguaje natural.',
    'mcp.c1tag':'Doctor Autónomo','mcp.c1t':'Doctor de Servidores y Análisis de Caídas','mcp.c1d':'La IA utiliza diagnose_server, explain_crash y propose_fix para analizar logs, detectar causas de cuelgues o falta de RAM y proponer soluciones ordenadas.',
    'mcp.c2tag':'Modpacks por Voz/Chat','mcp.c2t':'Planificación y Resolución de Dependencias','mcp.c2d':'Busca en Modrinth, Hangar, SpigotMC y CurseForge. plan_modpack y assemble_modpack resuelven dependencias y detectan conflictos antes de instalar.',
    'mcp.c3tag':'Ciclo de Contenidos','mcp.c3t':'Actualizaciones y Reversión Automática','mcp.c3d':'Pídele a la IA: "Comprueba actualizaciones de mods". Escanea registros con check_updates, actualiza en bloque y revierte si algo falla con rollback_content_update.',
    'mcp.c4tag':'Privacidad y Seguridad','mcp.c4t':'Seguridad en 3 Niveles y Limpieza de PII','mcp.c4d':'División estricta en read, write y destroy. Las direcciones IP y correos se eliminan antes de enviar logs a la IA, y todas las acciones se registran en un log de auditoría.',
    'mcp.cfgTitle':'Configuración para Claude Desktop en claude_desktop_config.json','mcp.cfgHint':'Copia el token en Ajustes > MCP de la aplicación',

    'soft.eyebrow':'COMPATIBILIDAD','soft.title':'Soporta todos tus programas de servidor favoritos.','soft.sub':'Las listas de versiones cargan directamente desde los repositorios oficiales.',

    'faq.eyebrow':'TRANSPARENTE','faq.title':'Preguntas Frecuentes','faq.sub':'Todo lo que necesitas saber sobre ObserverLauncher.',
    'trust.t1':'Ejecución Local','trust.d1':'Tus mundos y configuraciones se quedan directamente en tu PC.',
    'trust.t2':'Sin Cuentas','trust.d2':'Sin registros, correos ni contraseñas en la nube.',
    'trust.t3':'Sin Telemetría','trust.d3':'Sin rastreo en segundo plano ni publicidad.',
    'trust.t4':'Cierre Limpio','trust.d4':'Al cerrar la app no quedan procesos en segundo plano.',
    'faq.q1':'¿Tengo que pagar algo?','faq.a1':'No, ObserverLauncher es gratuito y de código abierto bajo licencia Apache-2.0. El servidor corre en tu propio PC.',
    'faq.q2':'¿Pueden unirse amigos desde el móvil (Bedrock)?','faq.a2':'¡Sí! Soporta GeyserMC y Floodgate con 1 clic, permitiendo que jugadores de móvil y PC jueguen juntos.',
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
    'nav.why':'Por que Observer','nav.showcase':'Recursos','nav.features':'Ferramentas','nav.mcp':'IA / MCP',
    'nav.software':'Softwares','nav.faq':'Perguntas','nav.download':'Baixar','nav.changelog':'Changelog','nav.back':'Início',
    'cta.download':'Baixar','cta.getStarted':'Baixar ObserverLauncher','cta.github':'Ver no GitHub',

    'hero.badge':'Versão 6.1.0 • Grátis e Código Aberto',
    'hero.title':'Crie seu servidor de Minecraft em 60 segundos.<br>Sem comandos de terminal.',
    'hero.lead':'O ObserverLauncher cuida de Java, firewall e configurações automaticamente. Chame seus amigos com túneis integrados sem mexer no roteador.',
    'hero.fact1':'Sem conta','hero.fact2':'Execução local no seu PC','hero.fact3':'Sem telemetria ou rastreamento','hero.fact4':'Windows e Linux',

    'why.eyebrow':'POR QUE OBSERVERLAUNCHER','why.title':'Diga adeus a erros de terminal e dores de cabeça com roteador.','why.sub':'Tudo o que você precisa para jogar junto em um app simples e moderno.',
    'why.c1tag':'Gerenciamento de Java','why.c1t':'Zero erros de versão do Java','why.c1d':'Minecraft 1.21 precisa do Java 21; 1.12 precisa do Java 8. O ObserverLauncher baixa e isola o Java exato para cada servidor automaticamente.',
    'why.c2tag':'Sem Abrir Portas','why.c2t':'Jogue com amigos em 1 clique','why.c2d':'Chega de configurar roteador. Com túneis integrados (Playit.gg / Pinggy), você tem um link público para compartilhar na hora.',
    'why.c3tag':'Proteção Total','why.c3t':'Marketplace seguro de Mods e Plugins','why.c3d':'Instale mods e plugins do Modrinth e Hangar diretamente no app. O detector avisa sobre conflitos antes que travem seu mundo.',
    'why.c4tag':'Tranquilidade','why.c4t':'Inspetor 3D e backups em 1 clique','why.c4d':'Veja skins 3D e inventários dos amigos, mapas em tempo real e faça backups em ZIP automáticos.',

    'showcase.eyebrow':'VEJA EM AÇÃO','showcase.title':'Feito para jogadores, não para administradores de TI.','showcase.sub':'Interface visual agradável e intuitiva para hospedar servidores.',
    'showcase.tab1':'Visão Geral','showcase.tab2':'Inspetor de Jogadores 3D','showcase.tab3':'Mapa do Mundo','showcase.tab4':'Configuração IA / MCP',
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
    'showcase.p4tag':'Configuração de IA','showcase.p4t':'Configuração MCP em 1 clique para Assistentes','showcase.p4d':'O ObserverLauncher inclui servidor MCP integrado. Copie a configuração JSON para conectar Claude Desktop ou ChatGPT.',
    'showcase.p4b1':'Configuração pronta para Claude Desktop e clientes MCP',
    'showcase.p4b2':'Acesso completo a 76 ferramentas especializadas de servidor',
    'showcase.p4b3':'Conexão restrita a 127.0.0.1 com tokens por sessão',

    'feat.eyebrow':'KIT COMPLETO','feat.title':'Tudo o que seu servidor de Minecraft realmente precisa.','feat.sub':'Equipado com recursos avançados para você não depender de scripts externos.',
    'feat.c1t':'Gerenciamento Multi-Instância','feat.c1d':'Execute e alterne entre vários servidores em uma só janela. Cada servidor tem sua própria pasta, Java isolado, agendamento e túnel.',
    'feat.c2t':'Crossplay Bedrock com Geyser','feat.c2d':'Detecta erros comuns de configuração no Geyser e Floodgate e aplica correções em 1 clique com backup. Abre túnel UDP para jogadores de celular.',
    'feat.c3t':'Console Interativo ao Vivo','feat.c3d':'Filtros de log e busca. Clicar no nome de um jogador no console abre diretamente o inspetor 3D de skin e inventário.',
    'feat.c4t':'Agendador Diário e Webhooks Discord','feat.c4d':'Defina horários automáticos de ligar e desligar. Receba alertas no Discord sobre inicialização, quedas ou jogadores conectados.',
    'feat.c5t':'Atualizações em Lote e Rollback (6.1.0)','feat.c5d':'Atualize mods e plugins em lote a partir do Modrinth e Hangar com backup automático e reversão em 1 clique em caso de instabilidade.',
    'feat.c6t':'Métricas Históricas e Perfis JVM','feat.c6d':'Gráficos de TPS, MSPT e RAM salvos no disco de 15 minutos até 30 dias. Inclui perfis de otimização de JVM (Aikar, G1GC, ZGC).',
    'feat.c7t':'Histórico de Configuração e Diff','feat.c7d':'Backup automático antes de qualquer edição no server.properties. Compare diferenças linha a linha e restaure instantaneamente.',
    'feat.c8t':'CLI Headless e Exportação Docker','feat.c8d':'Rode o backend sem interface gráfica pelo comando observer no terminal, ou exporte Dockerfile e compose prontos para VPS.',

    'mcp.title':'Integração Completa com Model Context Protocol (MCP)',
    'mcp.sub':'O ObserverLauncher disponibiliza 76 ferramentas de servidor via MCP local. Conecte Claude Desktop ou ChatGPT para controlar e automatizar seu servidor.',
    'mcp.c1tag':'Médico Autônomo','mcp.c1t':'Diagnóstico de Servidor e Análise de Crash','mcp.c1d':'A IA usa diagnose_server, explain_crash e propose_fix para examinar logs, apontar a causa de quedas e propor planos de correção claros.',
    'mcp.c2tag':'Modpacks por Conversa','mcp.c2t':'Planejamento e Resolução de Dependências','mcp.c2d':'Pesquise no Modrinth, Hangar, SpigotMC e CurseForge por linguagem natural. plan_modpack e assemble_modpack resolvem dependências automaticamente.',
    'mcp.c3tag':'Ciclo de Vida','mcp.c3t':'Atualizações em Lote e Reversão','mcp.c3d':'Peça para a IA: "Verifique atualizações de mods". Ela analisa registros com check_updates, atualiza e reverte se houver falhas com rollback_content_update.',
    'mcp.c4tag':'Segurança e Privacidade','mcp.c4t':'Segurança em 3 Níveis e Ocultação de PII','mcp.c4d':'Separação estrita em read, write e destroy. Endereços IP e e-mails são removidos dos logs antes do envio à IA, com registro em log de auditoria.',
    'mcp.cfgTitle':'Configuração para Claude Desktop em claude_desktop_config.json','mcp.cfgHint':'Copie o token em Configurações > MCP no aplicativo',

    'soft.eyebrow':'COMPATIBILIDADE','soft.title':'Roda todos os seus softwares de servidor favoritos.','soft.sub':'Versões carregadas em tempo real dos repositórios oficiais.',

    'faq.eyebrow':'TRANSPARÊNCIA','faq.title':'Perguntas Frequentes','faq.sub':'Tudo o que você precisa saber sobre o ObserverLauncher.',
    'trust.t1':'Execução Local','trust.d1':'Seus mundos e configurações ficam diretamente no seu computador.',
    'trust.t2':'Sem Conta','trust.d2':'Sem cadastros, e-mails ou senhas na nuvem.',
    'trust.t3':'Sem Telemetria','trust.d3':'Sem rastreamento em segundo plano ou anúncios.',
    'trust.t4':'Encerramento Limpo','trust.d4':'Fechar o app não deixa nenhum processo residual em execução.',
    'faq.q1':'Preciso pagar alguma coisa?','faq.a1':'Não! O ObserverLauncher é gratuito e de código aberto (Apache-2.0). Roda no seu próprio PC.',
    'faq.q2':'Amigos no celular (Bedrock) podem jogar?','faq.a2':'Sim! Suporta GeyserMC e Floodgate em 1 clique para jogadores de celular e console jogarem no seu servidor Java.',
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
    'nav.why':'Warum Observer','nav.showcase':'Showcase','nav.features':'Funktionen','nav.mcp':'KI / MCP',
    'nav.software':'Software','nav.faq':'FAQ','nav.download':'Download','nav.changelog':'Changelog','nav.back':'Startseite',
    'cta.download':'Download','cta.getStarted':'ObserverLauncher herunterladen','cta.github':'Auf GitHub ansehen',

    'hero.badge':'Version 6.1.0 • Kostenlos & Open Source',
    'hero.title':'Starte deinen Minecraft-Server in 60 Sekunden.<br>Ganz ohne Terminal.',
    'hero.lead':'ObserverLauncher installiert Java, Firewall-Regeln und Konfigurationsdateien automatisch. Teile deinen Server über integrierte Tunnel mit Freunden — ganz ohne Router-Portfreigabe.',
    'hero.fact1':'Kein Account nötig','hero.fact2':'Lokale Ausführung auf deinem PC','hero.fact3':'Keine Telemetrie oder Tracking','hero.fact4':'Windows & Linux',

    'why.eyebrow':'WARUM OBSERVERLAUNCHER','why.title':'Schluss mit Terminal-Befehlen und Router-Frust.','why.sub':'Alles, was du für gemeinsame Minecraft-Abenteuer brauchst, in einer übersichtlichen App.',
    'why.c1tag':'Automatische Java-Verwaltung','why.c1t':'Keine Java-Versionsfehler mehr','why.c1d':'Minecraft 1.21 braucht Java 21; 1.12 braucht Java 8. ObserverLauncher lädt und isoliert die passende Java-Version automatisch für jeden Server.',
    'why.c2tag':'Ohne Portfreigabe','why.c2t':'Mit Freunden spielen per Klick','why.c2d':'Kein lästiges Anmelden im Router. Dank integrierter Tunnel (Playit.gg / Pinggy) erhältst du sofort eine öffentliche Adresse zum Teilen.',
    'why.c3tag':'Absturzschutz','why.c3t':'Sicherer Mod- & Plugin-Marktplatz','why.c3d':'Installiere Mods und Plugins direkt aus Modrinth und Hangar. Die Konflikterkennung warnt dich vor Inkompatibilitäten, bevor dein Server abstürzt.',
    'why.c4tag':'Sicherheit','why.c4t':'3D-Spieler-Inspektor & 1-Klick-Backups','why.c4d':'Untersuche 3D-Skins und Inventare von Freunden, behalte die Live-Karte im Blick und erstelle automatische Backups vor Mod-Experimenten.',

    'showcase.eyebrow':'IN AKTION ERLEBEN','showcase.title':'Entwickelt für Spieler, nicht für Rechenzentren.','showcase.sub':'Eine intuitive Benutzeroberfläche, mit der Serververwaltung Spaß macht.',
    'showcase.tab1':'Übersicht & Steuerung','showcase.tab2':'3D-Spieler-Inspektor','showcase.tab3':'Live-Weltkarte','showcase.tab4':'KI / MCP Setup',
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
    'showcase.p4tag':'KI-Setup','showcase.p4t':'1-Klick MCP Konfiguration für KI-Assistenten','showcase.p4d':'Mit integriertem MCP-Server. Kopiere den fertigen JSON-Code, um Claude Desktop, ChatGPT oder Cursor im Handumdrehen anzubinden.',
    'showcase.p4b1':'Verbindungs-Konfiguration für Claude Desktop und MCP-Clients',
    'showcase.p4b2':'Vollständiger Zugriff auf 76 spezialisierte Server-Tools',
    'showcase.p4b3':'Sicher begrenzt auf 127.0.0.1 mit zufälligen Sitzungs-Tokens',

    'feat.eyebrow':'KOMPLETTES WERKZEUGSET','feat.title':'Alles, was dein Minecraft-Server wirklich braucht.','feat.sub':'Ausgestattet mit mächtigen integrierten Tools, ganz ohne externe Skripte.',
    'feat.c1t':'Multi-Instanz-Verwaltung','feat.c1d':'Verwalte und wechsle zwischen mehreren Servern in einem Fenster. Jeder Server besitzt eigenen Ordner, isoliertes Java, Zeitplan und Tunnel.',
    'feat.c2t':'Bedrock-Crossplay mit Geyser','feat.c2d':'Erkennt typische Geyser- und Floodgate-Konfigurationsfehler und repariert sie per Klick mit Backup. Öffnet einen UDP-Tunnel für Konsolen und Handys.',
    'feat.c3t':'Interaktive Live-Konsole','feat.c3d':'Log-Filter und Echtzeitsuche. Ein Klick auf Spielernamen in den Logs öffnet direkt den 3D-Skin- und Inventar-Inspektor.',
    'feat.c4t':'Tagesplaner & Discord-Webhooks','feat.c4d':'Definiere automatische Start- und Stoppzeiten. Sende Benachrichtigungen bei Start, Crash oder Beitritten direkt an deinen Discord-Kanal.',
    'feat.c5t':'Massen-Mod-Updates & Rollback (6.1.0)','feat.c5d':'Aktualisiere installierte Mods und Plugins stapelweise über Modrinth und Hangar mit automatischen Backups und 1-Klick-Rollback bei Fehlern.',
    'feat.c6t':'Historische Metriken & JVM-Profile','feat.c6d':'Verlaufsdiagramme für TPS, MSPT und RAM von 15 Minuten bis 30 Tage. Enthält 1-Klick-Optimierungsflags (Aikar, G1GC, ZGC).',
    'feat.c7t':'Konfigurations-Verlauf & Diff','feat.c7d':'Automatisches Backup vor jeder Bearbeitung von server.properties. Vergleiche Unterschiede Zeile für Zeile und stelle alte Versionen sofort wieder her.',
    'feat.c8t':'Headless-CLI & Docker-Export','feat.c8d':'Starte das Backend fensterlos per observer-Befehl im Terminal oder exportiere Dockerfile und compose fertig für deinen VPS.',

    'mcp.title':'Vollständige Model Context Protocol (MCP) Integration',
    'mcp.sub':'ObserverLauncher stellt 76 spezialisierte Tools über einen lokalen MCP-Server bereit. Verbinde Claude Desktop oder ChatGPT, um deinen Server per Sprachbefehl zu steuern.',
    'mcp.c1tag':'Autonomer Doktor','mcp.c1t':'Server-Doktor & Crash-Analyse','mcp.c1d':'Die KI nutzt diagnose_server, explain_crash und propose_fix, um Logs zu scannen, Ursachen zu finden und strukturierte Reparaturpläne vorzuschlagen.',
    'mcp.c2tag':'Modpacks per Chat','mcp.c2t':'Modpack-Planung & Abhängigkeits-Auflösung','mcp.c2d':'Durchsuche Modrinth, Hangar, SpigotMC und CurseForge in natürlicher Sprache. plan_modpack und assemble_modpack lösen Abhängigkeiten und Konflikte vorab.',
    'mcp.c3tag':'Inhaltsverwaltung','mcp.c3t':'Smarte Updates & Automatische Rollbacks','mcp.c3d':'Frage die KI: "Prüfe auf Mod-Updates". Sie scannt Registries mit check_updates, aktualisiert per update_content und rollt bei Bedarf mit rollback_content_update zurück.',
    'mcp.c4tag':'Sicherheit & Datenschutz','mcp.c4t':'3-Stufen-Sicherheit & PII-Bereinigung','mcp.c4d':'Strikte Trennung in read, write und destroy. IP-Adressen und E-Mails werden vor der Übertragung an die KI bereinigt, alle Aktionen landen im Audit-Log.',
    'mcp.cfgTitle':'Konfiguration für Claude Desktop in claude_desktop_config.json','mcp.cfgHint':'Token unter Einstellungen > MCP in der App kopieren',

    'soft.eyebrow':'KOMPATIBILITÄT','soft.title':'Unterstützt deine Lieblings-Serversoftware.','soft.sub':'Versionslisten laden direkt von den offiziellen Repositories.',

    'faq.eyebrow':'TRANSPARENT','faq.title':'Häufig gestellte Fragen','faq.sub':'Alles Wissenswerte über ObserverLauncher.',
    'trust.t1':'Lokale Ausführung','trust.d1':'Deine Welten und Einstellungen bleiben direkt auf deinem PC.',
    'trust.t2':'Kein Account','trust.d2':'Keine Registrierung, keine Passwörter, kein Cloud-Zwang.',
    'trust.t3':'Keine Telemetrie','trust.d3':'Kein Tracking im Hintergrund, keine Werbung.',
    'trust.t4':'Sauberes Beenden','trust.d4':'Schließen der App hinterlässt keine Hintergrundprozesse.',
    'faq.q1':'Muss ich etwas bezahlen?','faq.a1':'Nein, ObserverLauncher ist kostenlos und quelloffen (Apache-2.0). Der Server läuft direkt auf deinem PC.',
    'faq.q2':'Können Freunde vom Smartphone (Bedrock) beitreten?','faq.a2':'Ja! Mit 1-Klick-GeyserMC und Floodgate können Handy-, Konsolen- und PC-Spieler gemeinsam in derselben Java-Welt spielen.',
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
    'nav.why':'Преимущества','nav.showcase':'Возможности','nav.features':'Функции','nav.mcp':'ИИ / MCP',
    'nav.software':'Ядра','nav.faq':'Вопросы','nav.download':'Скачать','nav.changelog':'История изменений','nav.back':'Главная',
    'cta.download':'Скачать','cta.getStarted':'Скачать ObserverLauncher','cta.github':'Открыть на GitHub',

    'hero.badge':'Версия 6.1.0 • Бесплатно и с открытым кодом',
    'hero.title':'Запустите сервер Minecraft за 60 секунд.<br>Без командной строки.',
    'hero.lead':'ObserverLauncher автоматически настраивает Java, брандмауэр и параметры сервера. Приглашайте друзей через встроенные туннели без настройки роутера.',
    'hero.fact1':'Без аккаунтов','hero.fact2':'Локальный запуск на вашем ПК','hero.fact3':'Без телеметрии и слежки','hero.fact4':'Windows и Linux',

    'why.eyebrow':'ПОЧЕМУ OBSERVERLAUNCHER','why.title':'Забудьте об ошибках в консоли и настройке портов.','why.sub':'Всё необходимое для совместной игры в понятном графическом приложении.',
    'why.c1tag':'Управление Java','why.c1t':'Никаких проблем с версиями Java','why.c1d':'Для Minecraft 1.21 нужна Java 21, а для 1.12 — Java 8. ObserverLauncher сам скачивает и изолирует нужную версию Java для каждого сервера.',
    'why.c2tag':'Без проброса портов','why.c2t':'Игра с друзьями в один клик','why.c2d':'Не нужно заходить в настройки роутера. Встроенные туннели (Playit.gg / Pinggy) мгновенно дают публичный адрес для друзей.',
    'why.c3tag':'Защита от сбоев','why.c3t':'Безопасный каталог модов и плагинов','why.c3d':'Устанавливайте моды и плагины из Modrinth и Hangar. Детектор конфликтов предупредит о несовместимости до сбоя сервера.',
    'why.c4tag':'Спокойствие','why.c4t':'3D-осмотр игроков и бэкапы в 1 клик','why.c4d':'Просматривайте 3D-скины и инвентарь друзей, следите за картой мира и создавайте резервные копии в ZIP перед экспериментами.',

    'showcase.eyebrow':'В ДЕЙСТВИИ','showcase.title':'Создан для игроков, а не для сисадминов.','showcase.sub':'Удобный и красивый интерфейс для комфортного управления сервером.',
    'showcase.tab1':'Обзор и управление','showcase.tab2':'3D-инспектор игроков','showcase.tab3':'Живая карта мира','showcase.tab4':'Настройка ИИ / MCP',
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
    'showcase.p4tag':'Настройка ИИ','showcase.p4t':'Быстрое подключение MCP к ИИ-ассистентам','showcase.p4d':'Встроенный сервер MCP. Скопируйте готовый фрагмент JSON для мгновенного подключения Claude Desktop, ChatGPT или Cursor.',
    'showcase.p4b1':'Готовый конфиг для Claude Desktop и MCP-клиентов',
    'showcase.p4b2':'Полный доступ к 76 специализированным инструментам сервера',
    'showcase.p4b3':'Безопасная работа строго на 127.0.0.1 с токенами сессии',

    'feat.eyebrow':'ПОЛНЫЙ НАБОР ИНСТРУМЕНТОВ','feat.title':'Всё, что действительно нужно вашему серверу.','feat.sub':'Множество полезных возможностей из коробки — без необходимости сторонних скриптов.',
    'feat.c1t':'Управление несколькими серверами','feat.c1d':'Запускайте и переключайтесь между серверами в одном окне. У каждого сервера своя папка, изолированная Java, расписание и туннель.',
    'feat.c2t':'Кроссплей Bedrock через Geyser','feat.c2d':'Автоматическое исправление ошибок в Geyser и Floodgate в 1 клик с бэкапом. Открытие UDP-туннеля для игроков с телефонов и консолей.',
    'feat.c3t':'Интерактивная консоль','feat.c3d':'Фильтры логов и поиск. Нажатие на ник игрока в консоли сразу открывает окно 3D-осмотра скина и инвентаря.',
    'feat.c4t':'Планировщик и Discord Webhooks','feat.c4d':'Расписание автозапуска и остановки по дням. Отправка уведомлений в Discord при включении, крашах или входе игроков.',
    'feat.c5t':'Пакетное обновление модов и Rollback (6.1.0)','feat.c5d':'Обновление модов и плагинов из Modrinth и Hangar пакетом с автобэкапом старых версий и откатом в 1 клик при сбоях.',
    'feat.c6t':'История метрик и профили JVM','feat.c6d':'Графики нагрузки на диск от 15 минут до 30 дней. Готовые флаги оптимизации JVM (Aikar, G1GC, ZGC) в один клик.',
    'feat.c7t':'История настроек и Diff','feat.c7d':'Резервная копия перед каждым изменением server.properties. Визуальное сравнение различий по строкам и откат в 1 клик.',
    'feat.c8t':'Headless CLI и экспорт в Docker','feat.c8d':'Работа без графического интерфейса через утилиту observer в терминале или экспорт готовых Dockerfile и compose для VPS.',

    'mcp.title':'Глубокая интеграция с Model Context Protocol (MCP)',
    'mcp.sub':'ObserverLauncher предоставляет 76 инструментов через локальный сервер MCP. Подключите Claude Desktop или ChatGPT для управления сервером на естественном языке.',
    'mcp.c1tag':'Автономный доктор','mcp.c1t':'Диагностика сервера и анализ крашей','mcp.c1d':'ИИ использует diagnose_server, explain_crash и propose_fix для анализа логов, поиска причин сбоев и предложения четких инструкций по исправлению.',
    'mcp.c2tag':'Модпаки через диалог','mcp.c2t':'Планирование и разрешение зависимостей','mcp.c2d':'Поиск модов в Modrinth, Hangar, SpigotMC и CurseForge. Инструменты plan_modpack и assemble_modpack сами находят зависимости и предотвращают конфликты.',
    'mcp.c3tag':'Жизненный цикл','mcp.c3t':'Умные обновления и быстрый откат','mcp.c3d':'Скажите ИИ: "Проверь обновления модов". Он проверит реестры через check_updates, обновит файлы и сможет вернуть всё назад с rollback_content_update.',
    'mcp.c4tag':'Безопасность','mcp.c4t':'3 уровня доступа и очистка данных PII','mcp.c4d':'Четкое разделение на read, write и destroy. IP-адреса и email удаляются из логов перед отправкой в ИИ, а все действия фиксируются в Audit Log.',
    'mcp.cfgTitle':'Конфигурация для Claude Desktop в claude_desktop_config.json','mcp.cfgHint':'Скопируйте токен в Настройки > MCP в приложении',

    'soft.eyebrow':'СОВМЕСТИМОСТЬ','soft.title':'Поддерживает все популярные ядра.','soft.sub':'Списки версий загружаются напрямую из официальных источников.',

    'faq.eyebrow':'ПРОЗРАЧНОСТЬ','faq.title':'Часто задаваемые вопросы','faq.sub':'Всё, что нужно знать о запуске сервера через ObserverLauncher.',
    'trust.t1':'Локальный запуск','trust.d1':'Файлы миров и настройки хранятся исключительно на вашем ПК.',
    'trust.t2':'Без учетных записей','trust.d2':'Без регистраций, паролей и облачных привязок.',
    'trust.t3':'Без телеметрии','trust.d3':'Никакого фонового сбора данных и рекламы.',
    'trust.t4':'Чистое завершение','trust.d4':'После закрытия не остается никаких фоновых процессов.',
    'faq.q1':'Нужно ли платить за что-либо?','faq.a1':'Нет, ObserverLauncher бесплатен и имеет открытый исходный код (Apache-2.0). Сервер работает на вашем оборудовании.',
    'faq.q2':'Могут ли друзья с телефонов (Bedrock) играть со мной?','faq.a2':'Да! Поддержка GeyserMC и Floodgate в 1 клик позволяет игрокам с телефонов, консолей и ПК играть вместе на одном Java-сервере.',
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
    'nav.why':'为何选择','nav.showcase':'功能展示','nav.features':'全部功能','nav.mcp':'AI / MCP',
    'nav.software':'服务端','nav.faq':'常见问题','nav.download':'下载','nav.changelog':'更新日志','nav.back':'首页',
    'cta.download':'下载','cta.getStarted':'下载 ObserverLauncher','cta.github':'在 GitHub 查看',

    'hero.badge':'6.1.0 版本 • 免费且开源',
    'hero.title':'60秒内开好你的 Minecraft 服务器。<br>无需任何终端命令。',
    'hero.lead':'ObserverLauncher 自动安装匹配的 Java、配置防火墙与服务端参数。内置内网穿透隧道，无需设置路由器端口映射即可邀请好友联机。',
    'hero.fact1':'无需注册账号','hero.fact2':'本地直接运行','hero.fact3':'无后台数据追踪','hero.fact4':'支持 Windows 与 Linux',

    'why.eyebrow':'为何选择 OBSERVERLAUNCHER','why.title':'告别黑框命令行与路由器映射的烦恼。','why.sub':'专为普通玩家打造的现代化图形控制面板，让好友联机变得轻松愉快。',
    'why.c1tag':'自动管理 Java','why.c1t':'彻底告别 Java 版本不匹配','why.c1d':'Minecraft 1.21 需要 Java 21，而 1.12 需要 Java 8。ObserverLauncher 会自动检测并下载对应 Java，独立运行，不污染你的系统环境。',
    'why.c2tag':'无需端口映射','why.c2t':'一键与好友远程联机','why.c2d':'无需登录路由器后台配置 NAT 端口。内置 Tunnel 穿透隧道（Playit.gg / Pinggy），一键生成公网地址发给朋友即可加入。',
    'why.c3tag':'防崩溃保障','why.c3t':'安全的 Mod 与插件市场','why.c3d':'在应用内直接搜索安装 Modrinth 和 Hangar 资源。内置冲突检测器，在破坏世界之前提前拦截重复或不兼容的模组。',
    'why.c4tag':'安心省心','why.c4t':'3D 玩家查看器与一键备份','why.c4d':'直观查看好友的 3D 皮肤与背包物品，浏览实时卫星地图，在尝试新模组前自动打好 ZIP 备份，随时安全恢复。',

    'showcase.eyebrow':'实际界面展示','showcase.title':'专为玩家打造，拒绝冰冷复杂。','showcase.sub':'直观清晰的图形界面，让开服与管理一目了然。',
    'showcase.tab1':'概览与控制','showcase.tab2':'3D 玩家查看器','showcase.tab3':'实时卫星地图','showcase.tab4':'AI / MCP 设置',
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
    'showcase.p4tag':'AI 连接设置','showcase.p4t':'一键配置 AI 助手的 MCP 服务','showcase.p4d':'内置 Model Context Protocol (MCP) 服务端。复制预先生成的 JSON 配置代码，几秒钟即可接入 Claude Desktop、ChatGPT 或 Cursor。',
    'showcase.p4b1':'提供现成的 Claude Desktop 与 MCP 客户端配置代码',
    'showcase.p4b2':'全面开放 76 项专为 Minecraft 设计的管理工具',
    'showcase.p4b3':'安全限制于 127.0.0.1 本地回环并采用随机验证令牌',

    'feat.eyebrow':'全方位功能套件','feat.title':'你的 Minecraft 服务器所需的一切功能。','feat.sub':'开箱即用的深度功能支持，无需东拼西凑第三方脚本。',
    'feat.c1t':'多实例服务端管理','feat.c1d':'在同一界面中同时运行并切换多个服务器。每个实例具备独立的文件夹、隔离的 Java 环境、定时任务与穿透隧道。',
    'feat.c2t':'基岩版跨平台（Geyser 与 Floodgate）','feat.c2d':'自动检测常见配置错误并一键备份修复。并行开启 UDP 穿透通道，手机与主机玩家即刻顺畅加入。',
    'feat.c3t':'可交互的实时控制台','feat.c3d':'日志分级过滤与实时搜索。控制台日志中出现的玩家名称可直接点击，秒级打开其 3D 皮肤与物品栏查看器。',
    'feat.c4t':'每日定时任务与 Discord 提醒','feat.c4d':'设置服务器每日定时启停。在服务器开启、关闭、崩溃或玩家加入时，自动向 Discord 频道推送通知。',
    'feat.c5t':'批量模组更新与安全回滚 (6.1.0)','feat.c5d':'批量更新 Modrinth 与 Hangar 模组。自动对被替换的文件创建快照，若新版本不稳定支持一键快速回滚。',
    'feat.c6t':'历史性能走势与 JVM 参数预设','feat.c6d':'磁盘持久化保存 15 分钟至 30 天的 TPS、MSPT 和内存数据。一键应用经过验证的 JVM 调优参数（Aikar、G1GC、ZGC）。',
    'feat.c7t':'配置文件快照与行级差异对比','feat.c7d':'每次保存 server.properties 前自动生成快照。可视化对比每行配置改动，随时一键还原历史版本。',
    'feat.c8t':'无界面命令行模式与 Docker 导出','feat.c8d':'支持通过 observer 命令行工具无窗口运行（支持 JSON 输出），或直接导出用于 VPS 部署的 Dockerfile 与 compose。',

    'mcp.title':'全面集成 Model Context Protocol (MCP) 协议',
    'mcp.sub':'ObserverLauncher 通过本地 MCP 服务端提供 76 项专项管理工具。连接 Claude Desktop、ChatGPT 或 Cursor，用自然语言完成服务器控制、故障诊断与自动化任务。',
    'mcp.c1tag':'自主诊断医生','mcp.c1t':'服务端医生与崩溃分析器','mcp.c1d':'AI 调用 diagnose_server、explain_crash 与 propose_fix 扫描控制台缓冲区，精准定位崩溃根源或内存泄漏，并给出结构化的修复建议。',
    'mcp.c2tag':'自然语言整合包','mcp.c2t':'依赖解析与模组规划安装','mcp.c2d':'用自然语言搜索 Modrinth、Hangar、SpigotMC 和 CurseForge。plan_modpack 与 assemble_modpack 自动补齐前置依赖并在安装前拦截冲突。',
    'mcp.c3tag':'全生命周期管理','mcp.c3t':'智能更新与自动快照回滚','mcp.c3d':'只需对 AI 说：“检查模组更新”。AI 会使用 check_updates 扫描仓库，通过 update_content 批量更新并在异常时调用 rollback_content_update 回滚。',
    'mcp.c4tag':'安全与隐私隔离','mcp.c4t':'三级权限控制与敏感信息过滤','mcp.c4d':'严格区分 read（自由读取）、write（界面确认）和 destroy（始终弹窗确认）。日志在发往 AI 前会自动脱敏 IPv4 和邮箱，且所有操作记入审计日志。',
    'mcp.cfgTitle':'添加至 Claude Desktop 的 claude_desktop_config.json','mcp.cfgHint':'在软件设置 > MCP 中复制专用令牌',

    'soft.eyebrow':'兼容性','soft.title':'支持所有你喜爱的服务端核心。','soft.sub':'版本列表直接同步官方源，Minecraft 官方发布新版本后即刻支持。',

    'faq.eyebrow':'透明公开','faq.title':'常见问题解答','faq.sub':'关于使用 ObserverLauncher 本地开服你所关心的事。',
    'trust.t1':'本地独立运行','trust.d1':'世界存档与配置数据直接保存在你的电脑上。',
    'trust.t2':'无需注册账号','trust.d2':'无邮箱绑定、无登录限制、无云端锁定。',
    'trust.t3':'无后台遥测','trust.d3':'无任何后台行为追踪，无广告投放。',
    'trust.t4':'彻底退出','trust.d4':'关闭软件后不残留任何后台守护进程。',
    'faq.q1':'开服需要付费吗？','faq.a1':'完全免费。ObserverLauncher 采用 Apache-2.0 开源协议。服务器直接运行在你的电脑上，无需支付任何月租。',
    'faq.q2':'手机版（Bedrock/基岩版）朋友能进吗？','faq.a2':'可以！内置一键支持 GeyserMC 和 Floodgate 跨平台联机，手机、主机和电脑玩家可以在同一个 Java 世界里游玩。',
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
