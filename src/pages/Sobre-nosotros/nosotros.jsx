import React from "react";
import './nosotros.css'
import Img from "../../recursos/img1-09.jpg";
import Img2 from "../../recursos/img2-09.png";
import Img3 from "../../recursos/persona1-09.jpg";
import Img4 from "../../recursos/persona2-09.jpg";
import Img5 from "../../recursos/persona3-09.jpg";

const nosotros = () =>{
    return(
        <body>
            <h1>Sobre nosotros</h1>
            <section>
                <h2>Misión</h2>
                <article>
                    <div className="imagen">
                        <img src={Img} alt="" />
                    </div>
                    
                    <p>Tejer redes de aprendizaje para que las comunidades impulsen sus ideas: <br />Capacidad de inovación, desarrollo y avance social.</p>
                </article>
            </section>
            <section className="container2">
                <h2>Valores</h2>
                <article>
                <div className="imagen">
                        <img src={Img2} alt="" />
                    </div> 
                        <p>Los valores que tenemos como fundación son: Colaboración, <br />empatia,creatividad, entusiasmo y rigor.</p>
                    
                </article>
            </section>
            <section className="container3">
                <h2>Equipo fundador</h2>
                <article>
                    
                    <div className="imagen">
                        <img src={Img3} alt=""/>
                        <img src={Img4} alt="" />
                        <img src={Img5} alt="" />
                    </div>
                </article>
            </section>
        </body>
    )
}

















export default nosotros