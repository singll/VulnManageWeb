<div class="overlay-scrollbar {theme=='light'?'light':'dark'}" class:sidebar-expand="{navMin}" >
	<!-- navbar -->
	<div class="navbar">
		<!-- nav left -->
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link" href={null}>
					<i class="fas fa-bars" on:click={collapseSidebar}><Fa icon={faBars}/></i>
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
			<i class="fas fa-search"><Fa icon={faSearch} /></i>
		</form>
		<!-- end form -->
		<!-- nav right -->
		<ul class="navbar-nav nav-right">
			<li class="nav-item mode">
				<a class="nav-link" href={null} on:click={switchTheme}>
					<i class="fas fa-moon dark-icon"><Fa icon={faMoon} /></i>
					<i class="fas fa-sun light-icon"><Fa icon={faSun} /></i>
				</a>
			</li>
			<li class="nav-item dropdown">
				<a class="nav-link" href={null} >
					
					<i class="fas fa-bell dropdown-toggle" data-toggle="notification-menu" on:click={clickNotification}><Fa icon={faBell} /></i>
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
									
									<i class="fas fa-gift"><Fa icon={notification.icon} /></i>
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
									
									<i class="fas fa-user-tie"><Fa icon={faUserTie} /></i>
								</div>
								<span>Profile</span>
							</a>
						</li>
						<li class="dropdown-menu-item">
							<a href={null} class="dropdown-menu-link">
								<div>
									
									<i class="fas fa-cog"><Fa icon={faCog} /></i>
								</div>
								<span>Settings</span>
							</a>
						</li>
						<li  class="dropdown-menu-item">
							<a href={null} class="dropdown-menu-link">
								<div>
									
									<i class="far fa-credit-card"><Fa icon={faCreditCard} /></i>
								</div>
								<span>Payments</span>
							</a>
						</li>
						<li  class="dropdown-menu-item">
							<a href={null} class="dropdown-menu-link">
								<div>
									
									<i class="fas fa-spinner"><Fa icon={faSpinner} /></i>
								</div>
								<span>Projects</span>
							</a>
						</li>
						<li  class="dropdown-menu-item">
							<a href={null} class="dropdown-menu-link">
								<div>
									
									<i class="fas fa-sign-out-alt"><Fa icon={faSignOutAlt} /></i>
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
			{#each sidebars as sidebar}
			<li class="sidebar-nav-item" on:click={() => sidebarClick(sidebar.id)}>
				<a href={sidebar.route} class="sidebar-nav-link" class:active="{sidebar.active}">
					<div>
						<i class="fab"><Fa icon={sidebar.icon} /></i>
					</div>
					<span>{sidebar.name}</span>
				</a>
			</li>
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
	import Fa from 'svelte-fa'
	import { faFlag, faBars, faSearch, faMoon, faSun, faBell, faGift, 
	faTasks, faUserTie, faCog, faCreditCard, faSpinner, faSignOutAlt, 
	faTachometerAlt, faChartLine, faBookOpen, faAdjust, faAudioDescription, faCheckCircle,
	faBug, faEllipsisH, faMailReplyAll, faCircleCheck, faGlassCheers} from '@fortawesome/free-solid-svg-icons'

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

	let sidebars = [
		{id: 1, name: 'Dashboard',icon: faTachometerAlt, route: "/", active: true},
		{id: 2, name: 'Lorem', icon: faMailReplyAll, route: "/about", active: false},
		{id: 3, name: 'Morbi', icon: faTasks, route: "/about", active: false},
		{id: 4, name: 'Praesent', icon: faSpinner, route: "/about", active: false},
		{id: 5, name: 'Pellentesque', icon: faCircleCheck, route: "/about", active: false},
		{id: 6, name: 'Morbi', icon: faBug, route: "/about", active: false},
		{id: 7, name: 'Praesent', icon: faChartLine, route: "/about", active: false},
		{id: 8, name: 'Pellentesque', icon: faBookOpen, route: "/about", active: false},
		{id: 9, name: 'Morbi', icon: faAdjust, route: "/about", active: false},
		{id: 10, name: 'Praesent', icon: faGlassCheers, route: "/about", active: false},
		{id: 11, name: 'Pellentesque', icon: faAudioDescription, route: "/about", active: false},
  	];

	let notifications = [
		{id: 1, title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', date: '15/07/2020',icon: faGift},
		{id: 2, title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', date: '15/07/2020', icon: faTasks},
		{id: 3, title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', date: '15/07/2020', icon: faGift},
		{id: 4, title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', date: '15/07/2020', icon: faTasks},
		{id: 5, title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', date: '15/07/2020', icon: faGift},
		{id: 6, title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', date: '15/07/2020', icon: faTasks},
		{id: 7, title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', date: '15/07/2020', icon: faGift},
		{id: 8, title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', date: '15/07/2020', icon: faTasks},
		{id: 9, title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', date: '15/07/2020', icon: faGift},
		{id: 10, title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', date: '15/07/2020', icon: faTasks},
		{id: 11, title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', date: '15/07/2020', icon: faGift},
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
		console.log(id);
		for(let i = 0; i < sidebars.length; i++) {
			if (sidebars[i].id == id) {
				sidebars[i].active = true;
			} else {
				sidebars[i].active = false;
			}
		}
	}
	
</script>

