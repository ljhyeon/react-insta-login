import { useState } from 'react';
import './Login.css'
import logo from './assets/Instagram.png';

function Login() {
  const links = ["Meta", "About", "Blog", "Jobs", "Help", "API", "Privacy",
    "Terms", "Locations", "Instagram Lite", "Threads",
    "Contact Uploading & Non-Users", "Meta Verified"];

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const isFormValid = form.username && form.password && form.password.length > 5;

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
    }));
  };

  const onClickLoginBtn = () => {
    fetch('APIaddress', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: form.usernmae,
          password: form.password,
        }),
      })
        .then(response => response.json())
        .then(result => {
          if (result.message === 'SUCCESS') {
            localStorage.setItem('access-token', result.ACCESS_TOKEN);
            // 페이지 이동 (예: '/mainjy')
            window.location.href = '/mainjy';
          }
          else {
            alert('An error occurred. Please try again later.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('An error occurred. Please try again later.');
        });
    };

  return (
    <>
      <main>
        <article>
          <div className="box">
            <form>
              <div className="insta-logo">
                <img src={logo} alt="instagram log" width="175px" />
              </div>
              <div className="login">
                <div className="login-input">
                    <label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Phone number, username, or email"
                            value={form.username}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div className="login-input">
                    <label>
                        <input
                            type="text"
                            name="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <button
                    type="button"
                    className={`login-button ${isFormValid ? 'enabled' : ''}`}
                    onClick = {onClickLoginBtn}
                >
                    Log in
                </button>
                <div className="or">
                    <div className="line or-item">
                        <hr />
                    </div>
                    <div className="or-text or-item">OR</div>
                    <div className="line or-item">
                        <hr />
                    </div>
                </div>
                <div className="login-facebook">
                    <img className="login-facebook-item" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png" alt="facebook log" width="20px" />
                    <a href="https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Foidc%2F%3Fapp_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignupviafb%252F%26response_type%3Dcode%26scope%3Dopenid%2Bemail%2Bprofile%2Blinking%26state%3DATALewLh0tC9i1LUIUAL6compjdNw-Py0wzAQN1kg90AO3cqhsamtP_Ur73ioB5qG_gRz1KKi_71BVFRqlr_RV7vZL0dFCYzTZXCZc-mw9H71eLWs8wjBr9brZBOocTGKJwZ65GVH0piMRMTa17uPyCEodQFvRzlTsNI48EocUOIiObuResI5dIhoA2MUP9rQf5g9wOgwdqvN9z39RAw_QKxtaHq1tVuaZ5MZI3VpgD4wHV-5n_DJ_64PC1VEF0YEc4W" className="login-facebook-item">
                        Log in with Facebook
                    </a>
                </div>
              </div>
              <div className='find-password'>
                <a href="https://www.instagram.com/accounts/password/reset/">Forgot password?</a>
              </div>
            </form>
          </div>
          <div className="box">
              <div className="register">
                <p>
                    Don{"'"}t have an account? <a href="https://www.instagram.com/accounts/emailsignup/">Sign up</a>
                </p>
              </div>
          </div>
          <div className="download">
            <div className="info">
                <span>Get the app.</span>
            </div>
            <div className="move">
                <a href="https://apps.apple.com/us/app/instagram/id389801252" target='_blank'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="download appstore" width="136px" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D02A1398B-E9CD-4F9C-BE95-5783A3C98FAA%26utm_campaign%3DunifiedHome%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps%3A%2F%2Fwww.instagram.com%2F" target='_blank'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="download appstore" width="136px" />
                </a>
            </div>
          </div>
        </article>
      </main>
      <footer>
        <div className="contact-info">
            {links.map((title) => <a href="" key={title}><span>{title}</span></a>)}
        </div>
        <div className="setting">
            <span>
                <div>
                    <select aria-label="Switch Display Language">
                        <option value="af">Afrikaans</option>
                        <option value="ar">العربية</option>
                        <option value="cs">Čeština</option>
                        <option value="da">Dansk</option>
                        <option value="de">Deutsch</option>
                        <option value="el">Ελληνικά</option>
                        <option value="en" selected>English</option>
                        <option value="en-gb">English (UK)</option>
                        <option value="es">Español (España)</option>
                        <option value="es-la">Español</option>
                        <option value="fa">فارسی</option>
                        <option value="fi">Suomi</option>
                        <option value="fr">Français</option>
                        <option value="he">עברית</option>
                        <option value="id">Bahasa Indonesia</option>
                        <option value="it">Italiano</option>
                        <option value="ja">日本語</option>
                        <option value="ko">한국어</option>
                        <option value="ms">Bahasa Melayu</option>
                    </select>
                </div>
            </span>
            <div>
                <span>© 2025 Instagram from Meta</span>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Login;