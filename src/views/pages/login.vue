<template>
    <main class="main">
        <nav class="breadcrumb-nav border-0 mb-0">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/">Главна</router-link>
                    </li>
                    <li class="breadcrumb-item active">Вход</li>
                </ol>
            </div>
        </nav>
        <div class="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
            style="background-image:url(./assets/images/form_sig_up.jpg) !important">
            <div class="container">
                <div class="form-box">
                    <div class="form-tab">
                        <!-- <tabs class="nav-pills nav-fill" :data="tabsData"></tabs> -->
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="sign_in">
                                <form action="#">
                                    <div class="custom"
                                        style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 40px;">
                                        <h4 style="font-family: Gilroy-Medium !important; font-size: 20px;">Вход по
                                            отпечатку пальца</h4>
                                        <img src="../../assets/newImg/finger.png" alt="finger">
                                    </div>
                                    <!-- <div class="form-group">
                                        <label for="singin-email-2">Username or email address *</label>
                                        <input type="text" class="form-control" id="singin-email-2" name="singin-email"
                                            required />
                                    </div>
                                    <div class="form-group">
                                        <label for="singin-password-2">Password *</label>
                                        <input type="password" class="form-control" id="singin-password-2"
                                            name="singin-password" required />
                                    </div> -->
                                    <div class="form-footer">
                                        <!-- <button type="submit" class="btn btn-outline-primary-2">
                                            <span>LOG IN</span>
                                            <i class="icon-long-arrow-right"></i>
                                        </button>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="signin-remember-2" />
                                            <label class="custom-control-label" for="signin-remember-2">Remember Me</label>
                                        </div> -->
                                        <!-- <a href="javascript:;" class="forgot-link">Forgot Your Password?</a> -->
                                    </div>
                                </form>
                                <div class="form-choice">
                                    <p class="text-center" style="font-family: Gilroy-Medium !important; font-size: 16px;">
                                        Войти другим способом</p>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <a href="javascript:;" class="btn btn-login btn-g"
                                                style="border-radius: 100px !important; font-family: Gilroy-Regular !important; font-size: 13px;">
                                                <!-- <i class="icon-google"></i> -->
                                                По номеру телефона
                                            </a>
                                        </div>
                                        <div class="col-sm-6">
                                            <a href="javascript:;" class="btn btn-login btn-f"
                                                style="border-radius: 100px !important; font-family: Gilroy-Regular !important; font-size: 13px;">
                                                <!-- <i class="icon-facebook-f"></i> -->
                                                По номеру участника
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="tab-pane fade" id="register">
                                <form action="#">
                                    <div class="form-group">
                                        <label for="register-email-2">Your email address *</label>
                                        <input type="email" class="form-control" id="register-email-2" name="register-email"
                                            required />
                                    </div>
                                    <div class="form-group">
                                        <label for="register-password-2">Password *</label>
                                        <input type="password" class="form-control" id="register-password-2"
                                            name="register-password" required />
                                    </div>
                                    <div class="form-footer">
                                        <button type="submit" class="btn btn-outline-primary-2">
                                            <span>SIGN UP</span>
                                            <i class="icon-long-arrow-right"></i>
                                        </button>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="register-policy-2"
                                                required />
                                            <label class="custom-control-label" for="register-policy-2">
                                                I agree to the
                                                <a href="javascript:;">privacy policy</a> *
                                            </label>
                                        </div>
                                    </div>
                                </form>
                                <div class="form-choice">
                                    <p class="text-center">or sign in with</p>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <a href="javascript:;" class="btn btn-login btn-g">
                                                <i class="icon-google"></i>
                                                Login With Google
                                            </a>
                                        </div>
                                        <div class="col-sm-6">
                                            <a href="javascript:;" class="btn btn-login btn-f">
                                                <i class="icon-facebook-f"></i>
                                                Login With Facebook
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import Tabs from '../../components/elements/Tabs.vue';
export default {
    components: {
        Tabs
    },
    data: function () {
        return {
            tabsData: [
                {
                    id: 'sign_in',
                    title: 'Sign In',
                    active: true
                },
                {
                    id: 'register',
                    title: 'Register'
                }
            ]
        };
    }
};
</script>
<style scoped></style>