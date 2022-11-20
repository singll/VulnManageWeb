<div class="overlay-scrollbar {theme=='light'?'light':'dark'}" class:sidebar-expand="{navMin}" >
	<!-- navbar -->
	<div class="navbar">
		<!-- nav left -->
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link" href={null}>
					<i class="fas fa-bars" on:click={collapseSidebar}><Fa icon={iconMap['faBars']}/></i>
				</a>
			</li>
			<li class="nav-item">
				<img src="AT-pro-black.png" alt="ATPro logo" class="logo logo-light">
				<img src="AT-pro-white.png" alt="ATPro logo" class="logo logo-dark">
			</li>
		</ul>
		<!-- end nav left -->
		<!-- form -->
		<form class="navbar-search">
			<input type="text" name="Search" class="navbar-search-input" placeholder="What you looking for...">
			<i class="fas fa-search"><Fa icon={iconMap['faSearch']} /></i>
		</form>
		<!-- end form -->
		<!-- nav right -->
		<ul class="navbar-nav nav-right">
			<li class="nav-item mode">
				<a class="nav-link" href={null} on:click={switchTheme}>
					<i class="fas fa-moon dark-icon"><Fa icon={iconMap['faMoon']} /></i>
					<i class="fas fa-sun light-icon"><Fa icon={iconMap['faSun']} /></i>
				</a>
			</li>
			<li class="nav-item dropdown">
				<a class="nav-link" href={null} >
					
					<i class="fas fa-bell dropdown-toggle" data-toggle="notification-menu" on:click={clickNotification}><Fa icon={iconMap['faBell']} /></i>
					<span class="navbar-badge">15</span>
				</a>
				<ul id="notification-menu" class="dropdown-menu notification-menu" class:dropdown-expand={notificationShow}>
					<div class="dropdown-menu-header">
						<span>
							Notifications
						</span>
					</div>
					<div class="dropdown-menu-content overlay-scrollbar scrollbar-hover">
						{#each notifications as notification}
						<li class="dropdown-menu-item">
							<a href={null} class="dropdown-menu-link">
								<div>
									
									<i class="fas fa-gift"><Fa icon={iconMap[notification.icon]} /></i>
								</div>
								<span>
									{notification.title}
									<br>
									<span>
										{notification.date}
									</span>
								</span>
							</a>
						</li>
						{/each}
						
					</div>
					<div class="dropdown-menu-footer">
						<span>
							View all notifications
						</span>
					</div>
				</ul>
			</li>
			<li class="nav-item avt-wrapper">
				<div class="avt dropdown">
					<img src={"tuat.jpg"} alt="UserImage" class="dropdown-toggle" data-toggle="user-menu" on:click={clickUserMenu}>
					<ul id="user-menu" class="dropdown-menu" class:dropdown-expand={userMenuShow}>
						<li  class="dropdown-menu-item">
							<a href={null} class="dropdown-menu-link">
								<div>
									
									<i class="fas fa-user-tie"><Fa icon={iconMap['faUserTie']} /></i>
								</div>
								<span>Profile</span>
							</a>
						</li>
						<li class="dropdown-menu-item">
							<a href={null} class="dropdown-menu-link">
								<div>
									
									<i class="fas fa-cog"><Fa icon={iconMap['faCog']} /></i>
								</div>
								<span>Settings</span>
							</a>
						</li>
						<li  class="dropdown-menu-item">
							<a href={null} class="dropdown-menu-link">
								<div>
									
									<i class="far fa-credit-card"><Fa icon={iconMap['faCreditCard']} /></i>
								</div>
								<span>Payments</span>
							</a>
						</li>
						<li  class="dropdown-menu-item">
							<a href={null} class="dropdown-menu-link">
								<div>
									
									<i class="fas fa-spinner"><Fa icon={iconMap['faSpinner']} /></i>
								</div>
								<span>Projects</span>
							</a>
						</li>
						<li  class="dropdown-menu-item">
							<a href={null} class="dropdown-menu-link">
								<div>
									
									<i class="fas fa-sign-out-alt"><Fa icon={iconMap['faSignOutAlt']} /></i>
								</div>
								<span>Logout</span>
							</a>
						</li>
					</ul>
				</div>
			</li>
		</ul>
		<!-- end nav right -->
	</div>
	<!-- end navbar -->
	<!-- sidebar -->
	<div class="sidebar">
		<ul class="sidebar-nav">
			{#each menus as menu}
			{#if menu.hidden == false}
				{#if menu.children == null}
					
					<li class="sidebar-nav-item" on:click={() => sidebarClick(menu.ID)}>
						
						<a href={menu.path} class="sidebar-nav-link" class:active="{false}">
							<div>
								<i class="fab"><Fa icon={iconMap[menu.meta.icon]} /></i>
							</div>
							<span>{menu.meta.title}</span>
						</a>
					</li>
				{:else}
					<li class="sidebar-nav-item" on:click={() => sidebarMenuClick(menu.ID)}>
						<a href={menu.path} class="sidebar-nav-link" class:active="{false}">
							<div>
								<i class="fab"><Fa icon={iconMap[menu.meta.icon]} /></i>
							</div>
							<span>{menu.meta.title}</span>
							<div>
								<i class="fab"><Fa icon={iconMap['faAngleDown']} /></i>
							</div>
						</a>
					</li>
					{#each menu.children as childMenu}
					{#if childMenu.hidden == false}
						<li class="sidebar-nav-children-item" on:click={() => sidebarClick(childMenu.ID)} hidden={menuHidden}>
							
							<a href={childMenu.path} class="sidebar-nav-children-link" class:active="{false}">
								<div>
									<i class="fab"><Fa icon={iconMap[childMenu.meta.icon]} /></i>
								</div>
								<span>{childMenu.meta.title}</span>
							</a>
						</li>
					{/if}
					{/each}
				{/if}
			{/if}
			{/each}
		</ul>
		
	</div>
	<!-- end sidebar -->
	<!-- main content -->
	<div class="wrapper">
		<slot />
	</div>
	<!-- end main content-->
</div>
<script>
// @ts-nocheck

	import { onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import iconMap from '@/utils/iconMap';
	
	// 未登录直接跳转到登录界面
	import { goto } from '$app/navigation';
	import { token } from '@/store.js';
	

	const primaryColor = '#4834d4'
	const warningColor = '#f0932b'
	const successColor = '#6ab04c'
	const dangerColor = '#eb4d4b'

	const themeCookieName = 'theme'
	const themeDark = 'dark'
	const themeLight = 'light'
	let theme = themeLight;

	let navMin = false;
	let notificationShow = false;
	let userMenuShow = false;

    let menuHidden = true;
    let activeMenuID = -1;

	let sidebars = [
		{id: 1, name: 'Dashboard',icon: 'faTachometerAlt', route: "/", active: true},
		{id: 2, name: 'Lorem', icon: 'faMailReplyAll', route: "/about", active: false},
		{id: 3, name: 'Morbi', icon: 'faTasks', route: "/about", active: false},
		{id: 4, name: 'Praesent', icon: 'faSpinner', route: "/about", active: false},
		{id: 5, name: 'Pellentesque', icon: 'faCircleCheck', route: "/about", active: false},
		{id: 6, name: 'Morbi', icon: 'faBug', route: "/about", active: false},
		{id: 7, name: 'Praesent', icon: 'faChartLine', route: "/about", active: false},
		{id: 8, name: 'Pellentesque', icon: 'faBookOpen', route: "/about", active: false},
		{id: 9, name: 'Morbi', icon: 'faAdjust', route: "/about", active: false},
		{id: 10, name: 'Praesent', icon: 'faGlassCheers', route: "/about", active: false},
		{id: 11, name: 'Pellentesque', icon: 'faAudioDescription', route: "/about", active: false},
  	];

	let menus = [
            {
                "ID": 1,
                "CreatedAt": "2022-08-26T10:45:36.502+08:00",
                "UpdatedAt": "2022-08-26T10:45:36.502+08:00",
                "parentId": "0",
                "path": "/",
                "name": "dashboard",
                "hidden": false,
                "component": "view/dashboard/index.vue",
                "sort": 1,
                "meta":
                {
                    "keepAlive": false,
                    "defaultMenu": false,
                    "title": "仪表盘",
                    "icon": "faTachometerAlt",
                    "closeTab": false
                },
                "authoritys": null,
                "menuBtn": null,
                "menuId": "1",
                "children": null,
                "parameters":
                [],
                "btns": null
            },
            {
                "ID": 3,
                "CreatedAt": "2022-08-26T10:45:36.502+08:00",
                "UpdatedAt": "2022-08-26T10:45:36.502+08:00",
                "parentId": "0",
                "path": "admin",
                "name": "superAdmin",
                "hidden": false,
                "component": "view/superAdmin/index.vue",
                "sort": 3,
                "meta":
                {
                    "keepAlive": false,
                    "defaultMenu": false,
                    "title": "超级管理员",
                    "icon": "faUser",
                    "closeTab": false
                },
                "authoritys": null,
                "menuBtn": null,
                "menuId": "3",
                "children":
                [
                    {
                        "ID": 4,
                        "CreatedAt": "2022-08-26T10:45:36.502+08:00",
                        "UpdatedAt": "2022-08-26T10:45:36.502+08:00",
                        "parentId": "3",
                        "path": "authority",
                        "name": "authority",
                        "hidden": false,
                        "component": "view/superAdmin/authority/authority.vue",
                        "sort": 1,
                        "meta":
                        {
                            "keepAlive": false,
                            "defaultMenu": false,
                            "title": "角色管理",
                            "icon": "faUser",
                            "closeTab": false
                        },
                        "authoritys": null,
                        "menuBtn": null,
                        "menuId": "4",
                        "children": null,
                        "parameters":
                        [],
                        "btns": null
                    },
                    {
                        "ID": 19,
                        "CreatedAt": "2022-08-26T10:45:36.502+08:00",
                        "UpdatedAt": "2022-08-26T10:45:36.502+08:00",
                        "parentId": "3",
                        "path": "dictionaryDetail/:id",
                        "name": "dictionaryDetail",
                        "hidden": true,
                        "component": "view/superAdmin/dictionary/sysDictionaryDetail.vue",
                        "sort": 1,
                        "meta":
                        {
                            "keepAlive": false,
                            "defaultMenu": false,
                            "title": "字典详情-${id}",
                            "icon": "order",
                            "closeTab": false
                        },
                        "authoritys": null,
                        "menuBtn": null,
                        "menuId": "19",
                        "children": null,
                        "parameters":
                        [],
                        "btns": null
                    },
                    {
                        "ID": 5,
                        "CreatedAt": "2022-08-26T10:45:36.502+08:00",
                        "UpdatedAt": "2022-08-26T10:45:36.502+08:00",
                        "parentId": "3",
                        "path": "menu",
                        "name": "menu",
                        "hidden": false,
                        "component": "view/superAdmin/menu/menu.vue",
                        "sort": 2,
                        "meta":
                        {
                            "keepAlive": true,
                            "defaultMenu": false,
                            "title": "菜单管理",
                            "icon": "faTicket",
                            "closeTab": false
                        },
                        "authoritys": null,
                        "menuBtn": null,
                        "menuId": "5",
                        "children": null,
                        "parameters":
                        [],
                        "btns": null
                    },
                    {
                        "ID": 6,
                        "CreatedAt": "2022-08-26T10:45:36.502+08:00",
                        "UpdatedAt": "2022-08-26T10:45:36.502+08:00",
                        "parentId": "3",
                        "path": "api",
                        "name": "api",
                        "hidden": false,
                        "component": "view/superAdmin/api/api.vue",
                        "sort": 3,
                        "meta":
                        {
                            "keepAlive": true,
                            "defaultMenu": false,
                            "title": "api管理",
                            "icon": "faPlateWheat",
                            "closeTab": false
                        },
                        "authoritys": null,
                        "menuBtn": null,
                        "menuId": "6",
                        "children": null,
                        "parameters":
                        [],
                        "btns": null
                    },
                    {
                        "ID": 7,
                        "CreatedAt": "2022-08-26T10:45:36.502+08:00",
                        "UpdatedAt": "2022-08-26T10:45:36.502+08:00",
                        "parentId": "3",
                        "path": "user",
                        "name": "user",
                        "hidden": false,
                        "component": "view/superAdmin/user/user.vue",
                        "sort": 4,
                        "meta":
                        {
                            "keepAlive": false,
                            "defaultMenu": false,
                            "title": "用户管理",
                            "icon": "faPlateWheat",
                            "closeTab": false
                        },
                        "authoritys": null,
                        "menuBtn": null,
                        "menuId": "7",
                        "children": null,
                        "parameters":
                        [],
                        "btns": null
                    },
                    {
                        "ID": 18,
                        "CreatedAt": "2022-08-26T10:45:36.502+08:00",
                        "UpdatedAt": "2022-08-26T10:45:36.502+08:00",
                        "parentId": "3",
                        "path": "dictionary",
                        "name": "dictionary",
                        "hidden": false,
                        "component": "view/superAdmin/dictionary/sysDictionary.vue",
                        "sort": 5,
                        "meta":
                        {
                            "keepAlive": false,
                            "defaultMenu": false,
                            "title": "字典管理",
                            "icon": "faBook",
                            "closeTab": false
                        },
                        "authoritys": null,
                        "menuBtn": null,
                        "menuId": "18",
                        "children": null,
                        "parameters":
                        [],
                        "btns": null
                    },
                    {
                        "ID": 20,
                        "CreatedAt": "2022-08-26T10:45:36.502+08:00",
                        "UpdatedAt": "2022-08-26T10:45:36.502+08:00",
                        "parentId": "3",
                        "path": "operation",
                        "name": "operation",
                        "hidden": false,
                        "component": "view/superAdmin/operation/sysOperationRecord.vue",
                        "sort": 6,
                        "meta":
                        {
                            "keepAlive": false,
                            "defaultMenu": false,
                            "title": "操作历史",
                            "icon": "faHistory",
                            "closeTab": false
                        },
                        "authoritys": null,
                        "menuBtn": null,
                        "menuId": "20",
                        "children": null,
                        "parameters":
                        [],
                        "btns": null
                    }
                ],
                "parameters":
                [],
                "btns": null
            },
            {
                "ID": 8,
                "CreatedAt": "2022-08-26T10:45:36.502+08:00",
                "UpdatedAt": "2022-08-26T10:45:36.502+08:00",
                "parentId": "0",
                "path": "person",
                "name": "person",
                "hidden": true,
                "component": "view/person/person.vue",
                "sort": 4,
                "meta":
                {
                    "keepAlive": false,
                    "defaultMenu": false,
                    "title": "个人信息",
                    "icon": "faMessage",
                    "closeTab": false
                },
                "authoritys": null,
                "menuBtn": null,
                "menuId": "8",
                "children": null,
                "parameters":
                [],
                "btns": null
            },
            {
                "ID": 14,
                "CreatedAt": "2022-08-26T10:45:36.502+08:00",
                "UpdatedAt": "2022-08-26T10:45:36.502+08:00",
                "parentId": "0",
                "path": "systemTools",
                "name": "systemTools",
                "hidden": false,
                "component": "view/systemTools/index.vue",
                "sort": 5,
                "meta":
                {
                    "keepAlive": false,
                    "defaultMenu": false,
                    "title": "系统工具",
                    "icon": "faTools",
                    "closeTab": false
                },
                "authoritys": null,
                "menuBtn": null,
                "menuId": "14",
                "children":
                [
                    {
                        "ID": 25,
                        "CreatedAt": "2022-08-26T10:45:36.502+08:00",
                        "UpdatedAt": "2022-08-26T10:45:36.502+08:00",
                        "parentId": "14",
                        "path": "autoCodeEdit/:id",
                        "name": "autoCodeEdit",
                        "hidden": true,
                        "component": "view/systemTools/autoCode/index.vue",
                        "sort": 0,
                        "meta":
                        {
                            "keepAlive": false,
                            "defaultMenu": false,
                            "title": "自动化代码-${id}",
                            "icon": "magic-stick",
                            "closeTab": false
                        },
                        "authoritys": null,
                        "menuBtn": null,
                        "menuId": "25",
                        "children": null,
                        "parameters":
                        [],
                        "btns": null
                    },
                    {
                        "ID": 26,
                        "CreatedAt": "2022-08-26T10:45:36.502+08:00",
                        "UpdatedAt": "2022-08-26T10:45:36.502+08:00",
                        "parentId": "14",
                        "path": "autoPkg",
                        "name": "autoPkg",
                        "hidden": false,
                        "component": "view/systemTools/autoPkg/autoPkg.vue",
                        "sort": 0,
                        "meta":
                        {
                            "keepAlive": false,
                            "defaultMenu": false,
                            "title": "自动化package",
                            "icon": "faFolder",
                            "closeTab": false
                        },
                        "authoritys": null,
                        "menuBtn": null,
                        "menuId": "26",
                        "children": null,
                        "parameters":
                        [],
                        "btns": null
                    },
                    {
                        "ID": 15,
                        "CreatedAt": "2022-08-26T10:45:36.502+08:00",
                        "UpdatedAt": "2022-08-26T10:45:36.502+08:00",
                        "parentId": "14",
                        "path": "autoCode",
                        "name": "autoCode",
                        "hidden": false,
                        "component": "view/systemTools/autoCode/index.vue",
                        "sort": 1,
                        "meta":
                        {
                            "keepAlive": true,
                            "defaultMenu": false,
                            "title": "代码生成器",
                            "icon": "faCode",
                            "closeTab": false
                        },
                        "authoritys": null,
                        "menuBtn": null,
                        "menuId": "15",
                        "children": null,
                        "parameters":
                        [],
                        "btns": null
                    },
                    {
                        "ID": 24,
                        "CreatedAt": "2022-08-26T10:45:36.502+08:00",
                        "UpdatedAt": "2022-08-26T10:45:36.502+08:00",
                        "parentId": "14",
                        "path": "autoCodeAdmin",
                        "name": "autoCodeAdmin",
                        "hidden": false,
                        "component": "view/systemTools/autoCodeAdmin/index.vue",
                        "sort": 1,
                        "meta":
                        {
                            "keepAlive": false,
                            "defaultMenu": false,
                            "title": "自动化代码管理",
                            "icon": "faCodeMerge",
                            "closeTab": false
                        },
                        "authoritys": null,
                        "menuBtn": null,
                        "menuId": "24",
                        "children": null,
                        "parameters":
                        [],
                        "btns": null
                    },
                    {
                        "ID": 16,
                        "CreatedAt": "2022-08-26T10:45:36.502+08:00",
                        "UpdatedAt": "2022-08-26T10:45:36.502+08:00",
                        "parentId": "14",
                        "path": "formCreate",
                        "name": "formCreate",
                        "hidden": false,
                        "component": "view/systemTools/formCreate/index.vue",
                        "sort": 2,
                        "meta":
                        {
                            "keepAlive": true,
                            "defaultMenu": false,
                            "title": "表单生成器",
                            "icon": "faCodeMerge",
                            "closeTab": false
                        },
                        "authoritys": null,
                        "menuBtn": null,
                        "menuId": "16",
                        "children": null,
                        "parameters":
                        [],
                        "btns": null
                    },
                    {
                        "ID": 17,
                        "CreatedAt": "2022-08-26T10:45:36.502+08:00",
                        "UpdatedAt": "2022-08-26T10:45:36.502+08:00",
                        "parentId": "14",
                        "path": "system",
                        "name": "system",
                        "hidden": false,
                        "component": "view/systemTools/system/system.vue",
                        "sort": 3,
                        "meta":
                        {
                            "keepAlive": false,
                            "defaultMenu": false,
                            "title": "系统配置",
                            "icon": "faCodeMerge",
                            "closeTab": false
                        },
                        "authoritys": null,
                        "menuBtn": null,
                        "menuId": "17",
                        "children": null,
                        "parameters":
                        [],
                        "btns": null
                    }
                ],
                "parameters":
                [],
                "btns": null
            },
            {
                "ID": 23,
                "CreatedAt": "2022-08-26T10:45:36.502+08:00",
                "UpdatedAt": "2022-08-26T10:45:36.502+08:00",
                "parentId": "0",
                "path": "state",
                "name": "state",
                "hidden": false,
                "component": "view/system/state.vue",
                "sort": 8,
                "meta":
                {
                    "keepAlive": false,
                    "defaultMenu": false,
                    "title": "服务器状态",
                    "icon": "faCloud",
                    "closeTab": false
                },
                "authoritys": null,
                "menuBtn": null,
                "menuId": "23",
                "children": null,
                "parameters":
                [],
                "btns": null
            },
        ];

	let notifications = [
		{id: 1, title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', date: '15/07/2020',icon: 'faGift'},
		{id: 2, title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', date: '15/07/2020', icon: 'faTasks'},
		{id: 3, title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', date: '15/07/2020', icon: 'faGift'},
		{id: 4, title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', date: '15/07/2020', icon: 'faTasks'},
		{id: 5, title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', date: '15/07/2020', icon: 'faGift'},
		{id: 6, title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', date: '15/07/2020', icon: 'faTasks'},
		{id: 7, title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', date: '15/07/2020', icon: 'faGift'},
		{id: 8, title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', date: '15/07/2020', icon: 'faTasks'},
		{id: 9, title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', date: '15/07/2020', icon: 'faGift'},
		{id: 10, title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', date: '15/07/2020', icon: 'faTasks'},
		{id: 11, title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', date: '15/07/2020', icon: 'faGift'},
    ];

	// const body = document.getElementsByTagName('body')[0]
	function collapseSidebar() {
		navMin = !navMin;
	}
	
	function switchTheme() {
		if (theme == themeLight) {
			theme = themeDark;
		}else{
			theme = themeLight;
		}
	}

	function clickNotification() {
		notificationShow = !notificationShow;
	}

	function clickUserMenu() {
		userMenuShow = !userMenuShow;
	}

	/**
	* @param {number} id
	*/
	function sidebarClick(id) {
		// console.log(id);
		for(let i = 0; i < sidebars.length; i++) {
			if (sidebars[i].id == id) {
				sidebars[i].active = true;
			} else {
				sidebars[i].active = false;
			}
		}
	}

    /**
	* @param {number} id
	*/
    function sidebarMenuClick(id) {
        console.log(id);
        // 设置当前的隐藏状态
    }

	onMount(() => {
		if ($token == 'null' || $token == '' || $token == null) {
			goto('/login');
		}
	});
	
</script>

