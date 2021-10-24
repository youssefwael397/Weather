import React from 'react'
import './Footer.css';

export default function Footer() {
    return (
        <footer className="text-center text-white footer" >

            <div>

                <section className="mb-4">

                    <a
                        target='_blank'
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.facebook.com/profile.php?id=100013882777343"
                        role="button"
                        data-mdb-ripple-color="dark" rel="noreferrer"
                    ><i className="fab fa-facebook-f"></i
                    ></a>


                    <a
                        target='_blank'
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://twitter.com/_youssef_waael_"
                        role="button"
                        data-mdb-ripple-color="dark" rel="noreferrer"
                    ><i className="fab fa-twitter"></i
                    ></a>


                    <a
                        target='_blank'
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.instagram.com/_youssef_wael_/"
                        role="button"
                        data-mdb-ripple-color="dark" rel="noreferrer"
                    ><i className="fab fa-instagram"></i
                    ></a>


                    <a
                        target='_blank'
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.linkedin.com/in/youssef-wael/"
                        role="button"
                        data-mdb-ripple-color="dark" rel="noreferrer"
                    ><i className="fab fa-linkedin"></i
                    ></a>

                    <a
                        target='_blank'
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://github.com/youssefwael397/"
                        role="button"
                        data-mdb-ripple-color="dark" rel="noreferrer"
                    ><i className="fab fa-github"></i
                    ></a>
                </section>

            </div>



            <div className="text-center text-dark p-3 copyright">
                © 2021 Copyright:
                <a className="text-dark" target='_blank' href='https://www.facebook.com/profile.php?id=100013882777343' rel="noreferrer">Youssef Wael</a>
            </div>

        </footer >
    )
}
