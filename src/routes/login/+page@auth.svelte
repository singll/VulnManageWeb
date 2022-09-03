<div class="row min-vh-100 maindiv light" style="background-image: url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80');">
  <span class="mask"></span>
    <div class="col-12 col-m-12 col-sm-12 container position-relative my-auto">
      <div class="row">
        <div class="col-4 col-m-8 mx-auto">
          <div class="card z-index-0 fadeIn3 fadeInBottom">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">Sign in</h4>
                
              </div>
            </div>
            <div class="card-content" >
              <form class="text-start row">
                <Textfield 
                class="col-12 my-3" 
                bind:value={username} 
                label="用户名"
                >
                  <!-- <HelperText slot="helper">Helper Text</HelperText> -->
                </Textfield>
                <Textfield 
                type="password"
                class="col-12 mb-3" 
                bind:value={password} 
                label="密码"
                >
                  <!-- <HelperText slot="helper">Helper Text</HelperText> -->
                </Textfield>

                <div class="col-12 row">
                  <Textfield 
                class="col-6 mb-3" 
                bind:value={captchacode} 
                label="验证码"
                >
                  <!-- <HelperText slot="helper">Helper Text</HelperText> -->
                </Textfield>
                <img class="col-6" src={captcha} alt="captcha" on:click={() => getCaptcha()}>
                </div>
                <div class="col-12 text-center">
                  <Button class="w-100 my-4 mb-2 bg-gradient-primary" on:click={() => console.log("1")}  variant="raised">
                    <Label>Sign in</Label>
                  </Button>
                  <!-- <button type="button" class="btn bg-gradient-primary w-100 my-4 mb-2">Sign in</button> -->
                </div>
                <p class="col-12 mt-4 text-sm text-center">
                  Don't have an account?
                  <a href="../pages/sign-up.html" class="text-primary text-gradient font-weight-bold">Sign up</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

<!-- <div class="bg-gray-200">
  <main class="main-content  mt-0">
    <div class="page-header align-items-start min-vh-100" style="background-image: url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80');">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                  <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">Sign in</h4>
                  <div class="row mt-3">
                    <div class="col-2 text-center ms-auto">
                      <a class="btn btn-link px-3" href="javascript:;">
                        <i class="fa fa-facebook text-white text-lg"></i>
                      </a>
                    </div>
                    <div class="col-2 text-center px-1">
                      <a class="btn btn-link px-3" href="javascript:;">
                        <i class="fa fa-github text-white text-lg"></i>
                      </a>
                    </div>
                    <div class="col-2 text-center me-auto">
                      <a class="btn btn-link px-3" href="javascript:;">
                        <i class="fa fa-google text-white text-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <form role="form" class="text-start">
                  <div class="input-group input-group-outline my-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control">
                  </div>
                  <div class="input-group input-group-outline mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control">
                  </div>
                  <div class="form-check form-switch d-flex align-items-center mb-3">
                    <input class="form-check-input" type="checkbox" id="rememberMe" checked>
                    <label class="form-check-label mb-0 ms-3" for="rememberMe">Remember me</label>
                  </div>
                  <div class="text-center">
                    <button type="button" class="btn bg-gradient-primary w-100 my-4 mb-2">Sign in</button>
                  </div>
                  <p class="mt-4 text-sm text-center">
                    Don't have an account?
                    <a href="../pages/sign-up.html" class="text-primary text-gradient font-weight-bold">Sign up</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer position-absolute bottom-2 py-2 w-100">
        <div class="container">
          <div class="row align-items-center justify-content-lg-between">
            <div class="col-12 col-md-6 my-auto">
              <div class="copyright text-center text-sm text-white text-lg-start">
                © <script>
                  document.write(new Date().getFullYear())
                </script>,
                made with <i class="fa fa-heart" aria-hidden="true"></i> by
                <a href="https://www.creative-tim.com" class="font-weight-bold text-white" target="_blank">Creative Tim</a>
                for a better web.
              </div>
            </div>
            <div class="col-12 col-md-6">
              <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                <li class="nav-item">
                  <a href="https://www.creative-tim.com" class="nav-link text-white" target="_blank">Creative Tim</a>
                </li>
                <li class="nav-item">
                  <a href="https://www.creative-tim.com/presentation" class="nav-link text-white" target="_blank">About Us</a>
                </li>
                <li class="nav-item">
                  <a href="https://www.creative-tim.com/blog" class="nav-link text-white" target="_blank">Blog</a>
                </li>
                <li class="nav-item">
                  <a href="https://www.creative-tim.com/license" class="nav-link pe-0 text-white" target="_blank">License</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </main>
</div> -->


<script>
  // import Fa from 'svelte-fa'
	// import { faTasks, faSpinner, faCheckCircle, faEllipsisH, faFaceAngry, faGift, faGolfBall} from '@fortawesome/free-solid-svg-icons'
  // import Fab, { Icon, Label } from '@smui/fab';
  // import Textfield from '@smui/textfield';
  import { onMount } from 'svelte';
  import HelperText from '@smui/textfield/helper-text';
  import Textfield from '@smui/textfield';
  import Button, { Label } from '@smui/button';
  import auth from '../../apis/auth';

  let username = '';
  let password = '';
  let captchacode = '';
  let captcha = '';

  async function getCaptcha() {
		// Make the API Call here
    auth.captcha().then(
(/** @type {any} */ res) => {
        console.log(res);
    //     rules.captcha[1].max = ele.data.captchaLength
    // rules.captcha[1].min = ele.data.captchaLength
    // picPath.value = ele.data.picPath
    // loginFormData.captchaId = ele.data.captchaId
      captcha = res.data.data.picPath;
      }
    )
	}

  onMount(async () => {
		// Make the API Call here
    getCaptcha();
	});
</script>
<style>
.maindiv{
  background-size: cover;
  background-position: 50%;
}
.mask {
    position: absolute;
    background-size: cover;
    background-position: center center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    background-image: linear-gradient(195deg, #42424a 0%, #191919 100%);
    opacity: 0.4 !important;
}

.container {
    z-index: 1;
    max-width: 1320px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
}
.my-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
}

.bg-gradient-primary {
    background-image: linear-gradient(195deg, var(--mdc-protected-button-container-color, var(--mdc-theme-primary, #6200ee)) 0%,  var(--mdc-protected-button-container-color, var(--mdc-theme-primary, #6200ee)) 100%);
    /* background-color: var(--mdc-protected-button-container-color, var(--mdc-theme-primary, #6200ee)); */
}

.shadow-primary {
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4) !important;
}

.border-radius-lg {
  border-radius: 0.5rem;
}

.text-white {
  color: #fff !important;
}

.font-weight-bolder {
  font-weight: 700 !important;
}
</style>