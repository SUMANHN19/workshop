import React from 'react'
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className='my-page'>
        <div className='navdiv'>

          <nav className="navbar navbar-expand-lg bg-light" id='logonav'><img src="sdmplogo1.png" className='logoimage' alt='...'></img>
            <div className='sdmp'><h1>Sri Dharmasthala Manjunatheshwara <br></br>Polytechnic Ujire</h1>
            </div>
            <img src="sdmplogo1.png" className='logoimage1' alt='...'></img>
          </nav>
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <h2>SDMP</h2>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='navullist'>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/#" id='homelist'>Home</a>
                  </li>

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Department
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="computerscience.html">Computer Science and Enginnering</a></li>
                      <li><a className="dropdown-item" href="electronicbranch.html">Electronic and Comunication Enginnering</a></li>
                      <li><a className="dropdown-item" href="civil.html">Civil Enginnering</a></li>
                      <li><a className="dropdown-item" href="machanical.html">Machanical Enginnering</a></li>

                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="Admission.html">Admissions </a>
                  </li>


                  <li className="nav-item">
                    <a className="nav-link" href="libarry.html">Library</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="http://mynetlinx.in/Home.aspx">Results</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Placement</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://app.sdmes.in/EERPV3.0/EAM/login.jsp?ConsID=SDMTI">Student Space</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://dtek.karnataka.gov.in/">Board Website</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">Countact US</a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        </div>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" id='spanbutton'></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" id='spanbutton'></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" id='spanbutton'></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img src="sdmp.jpg" className="d-block w-100" alt="..." id='images' />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="https://sdmit.in/wp-content/uploads/2019/06/img2.jpg" className="d-block w-100" id="images" alt="..." />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="vivekananda1.jpg" className="d-block w-100" alt="..." id='images' />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <table>
          <tr>
            <td className='firsttd'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dr._D._Veerendra_Heggade%2C_Dharmadhikari_of_Shri_Kshetra_Dharmasthala%2C_calls_on_the_Prime_Minister%2C_Shri_Narendra_Modi%2C_in_New_Delhi_on_August_31%2C_2016_%281%29.jpg/1280px-Dr._D._Veerendra_Heggade%2C_Dharmadhikari_of_Shri_Kshetra_Dharmasthala%2C_calls_on_the_Prime_Minister%2C_Shri_Narendra_Modi%2C_in_New_Delhi_on_August_31%2C_2016_%281%29.jpg" className='sdmimage'></img></td>
            <td>Our President
              <h2 className='presedentname'>Dr.D.Veerendra Heggade</h2>
              <p> Dharmaadhikari, Social Reformer, Educationist, Philosopher and Philanthropist, Dr. Veerendra Heggade is a multidimensional personality. What truly defines Dr. Heggade’s contribution is his  determined and consistent service to the nation; in recognition of which he has been awarded the second highest civilian award of the country, Padma Vibhushana by the President of India.</p></td>
          </tr>
          <tr>
            <td className='secondtd'><img src='sdmp.jpg' className='collegeimg'></img></td>
            <td className='secondtdd'>Our College
              <h3 className='ourcollagedescription'>Sri Dharmasthala Manjunatheshwara Polytechnic</h3>
              <p>Shri Dharmasthala Manjunatheshwara Polytechnic, Ujire  provides an opportunity for youngsters on this rural belt, deprive of higher technical education, to get themselves technically qualified and enhance their potential for seeking better placement and for those who can become entrepreneur in starting their own firm. Dr. D. Veerendra Heggade, Dharmadhikari at Sri Kshethra Dharmasthala and President of SDME Society, Ujire established this Institution in 2008. Since then under his able leadership Shri Dharmasthala Manjunatheshwara Polytechnic, Ujire has grown in the field of Technical Education. Shri Dharmasthala Manjunatheshwara Polytechnic is Managed by SDM Educational Society Ujire</p></td>
          </tr>
        </table>
      </div>
      <div className='bouttomPage'>
        <div className='buttomcontactspace'>
          <h2> Contact Us</h2>
          <hr className='hrclass'></hr>
          SDM Polytechnic <br></br>
          Ujire - 574240<br></br><br></br>
          08256-236600<br /><br></br>
          <a href="mailto:office@sdmpolytechnic.in" >office@sdmpolytechnic.in</a><br />
          <a href="mailto:principal@sdmpolytechnic.in" >principal@sdmpolytechnic.in</a><br />
        </div>
        <div className='butomdivquick'>
          <h2>Quick Links</h2>
          <hr className='hrclass'></hr>
          <a href='Aboutus.html'>About Us</a><br></br><br></br>
          <a href='accomadetion.html'>Accommodation</a><br></br><br></br>
          <a href='Admission.html'>Admissions</a><br></br><br></br>
          <a href='#'>Life at SDMP</a>
        </div>
      </div>
      <div className='bouttomdiv'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16" id='copyicon'>
          <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z" />
        </svg>
        <a href='#'><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16" id='facebookicon'>
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
        </svg></a>
        <a href='#'> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16" id='instagramicon'>
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
        </svg></a>
        <a href='#'><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16" id='youtudeicon'>
          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
        </svg></a>
      </div>
    </>
  );
}
