<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sudan Play - المتجر السوداني</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="config.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: #f0f0f0;
            text-align: center;
        }
        .header {
            background: linear-gradient(135deg, #D21034, #007A3D);
            color: white;
            padding: 2rem;
        }
        .menu {
            background: #333;
            padding: 1rem;
        }
        .menu a {
            color: white;
            text-decoration: none;
            margin: 0 1rem;
            padding: 0.5rem 1rem;
            border-radius: 5px;
        }
        .menu a:hover {
            background: #555;
        }
        .container {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 1rem;
        }
        .app-card {
            background: white;
            padding: 1rem;
            margin: 1rem;
            border-radius: 10px;
            display: inline-block;
            width: 300px;
        }
        .admin-panel {
            background: #e8f5e8;
            padding: 2rem;
            margin: 2rem;
            border-radius: 10px;
            display: none;
        }
        .floating-btn {
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: #D21034;
            color: white;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            font-size: 1.5rem;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>مرحباً في Sudan Play</h1>
        <p>منصة التطبيقات السودانية</p>
    </div>

    <div class="menu">
        <a href="index.html">الرئيسية</a>
        <a href="#apps">التطبيقات</a>
        <a href="login.html" id="adminMenuLink">دخول الإدارة</a>
    </div>

    <div class="container">
        <h2>التطبيقات المتاحة</h2>
        <div id="appsContainer">
            <!-- التطبيقات تظهر هنا -->
        </div>
    </div>

    <div class="admin-panel" id="adminPanel">
        <h3>لوحة التحكم</h3>
        <a href="dashboard.html" class="admin-btn">الذهاب للوحة التحكم</a>
        <button onclick="logout()">تسجيل خروج</button>
    </div>

    <a href="login.html" class="floating-btn" id="floatingBtn">
        <i class="fas fa-user-shield"></i>
    </a>

    <script>
        // دالة الذهاب للوحة التحكم
        function goToDashboard() {
            if (isAdminLoggedIn()) {
                window.location.href = 'dashboard.html';
            } else {
                window.location.href = 'login.html';
            }
        }

        // عند تحميل الصفحة
        document.addEventListener('DOMContentLoaded', function() {
            console.log('🔄 Page loaded');
            
            // تحديث الواجهة
            updateUI();
            
            // تحميل التطبيقات
            loadApps();
        });

        // تحديث الواجهة حسب حالة التسجيل
        function updateUI() {
            const isAdmin = isAdminLoggedIn();
            const adminPanel = document.getElementById('adminPanel');
            const adminMenuLink = document.getElementById('adminMenuLink');
            const floatingBtn = document.getElementById('floatingBtn');
            
            if (isAdmin) {
                adminPanel.style.display = 'block';
                adminMenuLink.innerHTML = 'لوحة التحكم';
                adminMenuLink.href = 'dashboard.html';
                floatingBtn.innerHTML = '<i class="fas fa-cog"></i>';
                floatingBtn.href = 'dashboard.html';
            } else {
                adminPanel.style.display = 'none';
                adminMenuLink.innerHTML = 'دخول الإدارة';
                adminMenuLink.href = 'login.html';
                floatingBtn.innerHTML = '<i class="fas fa-user-shield"></i>';
                floatingBtn.href = 'login.html';
            }
        }

        // تحميل التطبيقات
        function loadApps() {
            const apps = getApps();
            const container = document.getElementById('appsContainer');
            
            if (apps.length === 0) {
                container.innerHTML = '<p>لا توجد تطبيقات بعد</p>';
            } else {
                container.innerHTML = apps.map(app => `
                    <div class="app-card">
                        <h3>${app.name}</h3>
                        <p>${app.description || 'تطبيق سوداني'}</p>
                        <button>تحميل</button>
                    </div>
                `).join('');
            }
        }
    </script>
</body>
</html>
