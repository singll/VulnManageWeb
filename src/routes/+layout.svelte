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
						<li class="dropdown-menu-item">
							<a href={null} class="dropdown-menu-link">
								<div>
									
									<i class="fas fa-gift"><Fa icon={faGift} /></i>
								</div>
								<span>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
									<br>
									<span>
										15/07/2020
									</span>
								</span>
							</a>
						</li>
						<li class="dropdown-menu-item">
							<a href={null} class="dropdown-menu-link">
								<div>
									<i class="fas fa-tasks"><Fa icon={faTasks} /></i>
								</div>
								<span>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
									<br>
									<span>
										15/07/2020
									</span>
								</span>
							</a>
						</li>
						<li class="dropdown-menu-item">
							<a href={null} class="dropdown-menu-link">
								<div>
									<i class="fas fa-gift"><Fa icon={faGift} /></i>
								</div>
								<span>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
									<br>
									<span>
										15/07/2020
									</span>
								</span>
							</a>
						</li>
						<li class="dropdown-menu-item">
							<a href={null} class="dropdown-menu-link">
								<div>
									
									<i class="fas fa-tasks"><Fa icon={faTasks} /></i>
								</div>
								<span>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
									<br>
									<span>
										15/07/2020
									</span>
								</span>
							</a>
						</li>
						<li class="dropdown-menu-item">
							<a href={null} class="dropdown-menu-link">
								<div>
									
									<i class="fas fa-gift"><Fa icon={faGift} /></i>
								</div>
								<span>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
									<br>
									<span>
										15/07/2020
									</span>
								</span>
							</a>
						</li>
						<li class="dropdown-menu-item">
							<a href={null} class="dropdown-menu-link">
								<div>
									
									<i class="fas fa-tasks"><Fa icon={faTasks} /></i>
								</div>
								<span>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
									<br>
									<span>
										15/07/2020
									</span>
								</span>
							</a>
						</li>
						<li class="dropdown-menu-item">
							<a href={null} class="dropdown-menu-link">
								<div>
									
									<i class="fas fa-gift"><Fa icon={faGift} /></i>
								</div>
								<span>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
									<br>
									<span>
										15/07/2020
									</span>
								</span>
							</a>
						</li>
						<li class="dropdown-menu-item">
							<a href={null} class="dropdown-menu-link">
								<div>
									
									<i class="fas fa-tasks"><Fa icon={faTasks} /></i>
								</div>
								<span>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
									<br>
									<span>
										15/07/2020
									</span>
								</span>
							</a>
						</li>
						<li class="dropdown-menu-item">
							<a href={null} class="dropdown-menu-link">
								<div>
									
									<i class="fas fa-gift"><Fa icon={faGift} /></i>
								</div>
								<span>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
									<br>
									<span>
										15/07/2020
									</span>
								</span>
							</a>
						</li>
						<li class="dropdown-menu-item">
							<a href={null} class="dropdown-menu-link">
								<div>
									
									<i class="fas fa-tasks"><Fa icon={faTasks} /></i>
								</div>
								<span>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
									<br>
									<span>
										15/07/2020
									</span>
								</span>
							</a>
						</li>
						<li class="dropdown-menu-item">
							<a href={null} class="dropdown-menu-link">
								<div>
									
									<i class="fas fa-gift"><Fa icon={faGift} /></i>
								</div>
								<span>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
									<br>
									<span>
										15/07/2020
									</span>
								</span>
							</a>
						</li>
						<li class="dropdown-menu-item">
							<a href={null} class="dropdown-menu-link">
								<div>
									
									<i class="fas fa-tasks"><Fa icon={faTasks} /></i>
								</div>
								<span>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
									<br>
									<span>
										15/07/2020
									</span>
								</span>
							</a>
						</li>
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
			<li class="sidebar-nav-item">
				<a href={null} class="sidebar-nav-link">
					<div>
						
						<i class="fas fa-tachometer-alt"><Fa icon={faTachometerAlt} /></i>
					</div>
					<span>
						Dashboard
					</span>
				</a>
			</li>
			<li class="sidebar-nav-item">
				<a href={null} class="sidebar-nav-link active">
					<div>
						
						<i class="fab fa-accusoft"><Fa icon={faMailReplyAll} /></i>
					</div>
					<span>Lorem</span>
				</a>
			</li>
			<li  class="sidebar-nav-item">
				<a href={null} class="sidebar-nav-link">
					<div>
						
						<i class="fas fa-tasks"><Fa icon={faTasks} /></i>
					</div>
					<span>Morbi</span>
				</a>
			</li>
			<li  class="sidebar-nav-item">
				<a href={null} class="sidebar-nav-link">
					<div>
						
						<i class="fas fa-spinner"><Fa icon={faSpinner} /></i>
					</div>
					<span>Praesent</span>
				</a>
			</li>
			<li  class="sidebar-nav-item">
				<a href={null} class="sidebar-nav-link">
					<div>
						
						<i class="fas fa-check-circle"><Fa icon={faCircleCheck} /></i>
					</div>
					<span>Pellentesque</span>
				</a>
			</li>
			<li  class="sidebar-nav-item">
				<a href={null} class="sidebar-nav-link">
					<div>
						
						<i class="fas fa-bug"><Fa icon={faBug} /></i>
					</div>
					<span>Morbi</span>
				</a>
			</li>
			<li  class="sidebar-nav-item">
				<a href={null} class="sidebar-nav-link">
					<div>
						
						<i class="fas fa-chart-line"><Fa icon={faChartLine} /></i>
					</div>
					<span>Praesent</span>
				</a>
			</li>
			<li  class="sidebar-nav-item">
				<a href={null} class="sidebar-nav-link">
					<div>
						
						<i class="fas fa-book-open"><Fa icon={faBookOpen} /></i>
					</div>
					<span>Pellentesque</span>
				</a>
			</li>
			<li  class="sidebar-nav-item">
				<a href={null} class="sidebar-nav-link">
					<div>
						
						<i class="fas fa-adjust"><Fa icon={faAdjust} /></i>
					</div>
					<span>Morbi</span>
				</a>
			</li>
			<li  class="sidebar-nav-item">
				<a href={null} class="sidebar-nav-link">
					<div>
						
						<i class="fab fa-algolia"><Fa icon={faGlassCheers} /></i>
					</div>
					<span>Praesent</span>
				</a>
			</li>
			<li  class="sidebar-nav-item">
				<a href={null} class="sidebar-nav-link">
					<div>
						
						<i class="fas fa-audio-description"><Fa icon={faAudioDescription} /></i>
					</div>
					<span>Pellentesque</span>
				</a>
			</li>
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
	
</script>

