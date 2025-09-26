// config.js - هذا الملف يربط جميع الصفحات مع بعض

// الإعدادات العامة
const SUDAN_PLAY_CONFIG = {
    siteName: "Sudan Play",
    adminUsername: "admin",
    adminPassword: "123456",
    currentUser: null,
    isLoggedIn: false
};

// دالة للتحقق من تسجيل الدخول
function checkLogin() {
    const userData = localStorage.getItem('sudanPlayUser');
    if (userData) {
        SUDAN_PLAY_CONFIG.currentUser = JSON.parse(userData);
        SUDAN_PLAY_CONFIG.isLoggedIn = true;
        return true;
    }
    return false;
}

// دالة تسجيل الدخول
function login(username, password) {
    if (username === SUDAN_PLAY_CONFIG.adminUsername && 
        password === SUDAN_PLAY_CONFIG.adminPassword) {
        
        const userData = {
            username: username,
            loginTime: new Date().toISOString(),
            isAdmin: true
        };
        
        localStorage.setItem('sudanPlayUser', JSON.stringify(userData));
        SUDAN_PLAY_CONFIG.currentUser = userData;
        SUDAN_PLAY_CONFIG.isLoggedIn = true;
        
        return true;
    }
    return false;
}

// دالة تسجيل الخروج
function logout() {
    localStorage.removeItem('sudanPlayUser');
    localStorage.removeItem('sudanPlayApps');
    SUDAN_PLAY_CONFIG.currentUser = null;
    SUDAN_PLAY_CONFIG.isLoggedIn = false;
    window.location.href = 'index.html';
}

// نظام إدارة التطبيقات المشترك
function getApps() {
    const apps = localStorage.getItem('sudanPlayApps');
    return apps ? JSON.parse(apps) : [];
}

function saveApps(apps) {
    localStorage.setItem('sudanPlayApps', JSON.stringify(apps));
}

function addApp(newApp) {
    const apps = getApps();
    newApp.id = Date.now(); // ID فريد
    newApp.createdAt = new Date().toISOString();
    apps.push(newApp);
    saveApps(apps);
    return newApp;
}

// دالة للتنبيهات
function showMessage(message, type = 'info') {
    alert(message); // يمكنك استبدال هذا بنظام تنبيهات أجمل
}
