; 自我管理助手 - Inno Setup 安装脚本
; 版本: 1.2.0

[Setup]
; 基本信息
AppName=自我管理助手
AppVersion=1.2.0
AppPublisher=个人开发者
AppPublisherURL=https://github.com/
AppSupportURL=https://github.com/
AppUpdatesURL=https://github.com/

; 安装目录
DefaultDirName={pf}\自我管理助手
DefaultGroupName=自我管理助手
AllowNoIcons=yes

; 输出设置
OutputBaseFilename=自我管理助手-1.2.0-安装包
OutputDir=dist
Compression=lzma
SolidCompression=yes

; 管理员权限要求
PrivilegesRequired=lowest
InternalCompressLevel=max

; 版本信息
VersionInfoVersion=1.2.0
VersionInfoCompany=个人开发者
VersionInfoDescription=自我管理助手
VersionInfoCopyright=Copyright (c) 2026

; 卸载设置
UninstallDisplayIcon={app}\自我管理助手.exe

[Files]
; 复制整个 win-unpacked 文件夹的内容
Source: "dist\win-unpacked\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs

[Icons]
; 创建开始菜单和桌面快捷方式
Name: "{group}\自我管理助手"; Filename: "{app}\自我管理助手.exe"
Name: "{commondesktop}\自我管理助手"; Filename: "{app}\自我管理助手.exe"; Tasks: desktopicon

[Tasks]
; 可选任务
Name: "desktopicon"; Description: "创建桌面快捷方式"; GroupDescription: "附加图标:"

[Run]
; 安装完成后运行程序
Filename: "{app}\自我管理助手.exe"; Description: "启动自我管理助手"; Flags: nowait postinstall skipifsilent
