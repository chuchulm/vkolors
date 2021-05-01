import React from 'react'
import img from '../../../image/vk10.png'
 
export const Primervk10 = () => { 
    return (
        <div className="containerClass">
            <div className="row top" >
                <div className="col-1 container-text">
                    <h1>Primer-VK10 </h1>
                    <p>
                       es un imprimante o fondo liquido de alta tecnología, ecológico, a base de agua, compuesto por resina acrílica estirenada, pigmentos y
                       aditivos de la mas alta calidad. Cumple una función de aislante antialcalino para frisos recién hechos,
                       evita la eflorescencia y la carbonización del friso. Excelente para lugares donde hubo filtraciones para evitar el
                       desprendimiento por alcalinidad del nuevo revestimiento de la reparación. Sirve como base primer en la colocación de impermeabilizantes
                       y pinturas para canchas y viales, asimismo en la preparación del concreto viejo para colocar sobre èste, concreto nuevo.
                    </p>

                    <h2>Rendimiento</h2>
                    <p>
                        70 m2 por galón preparado con el agregado de agua. Puede variar notablemente dependiendo de la porosidad y absorción de la superficie 
                    </p>  
    
                    <h2>Acabado</h2>
                    <p>
                        Mate.
                    </p>

                    <h2>Secamiento</h2>
                    <p>
                        Entre una y dos horas dependiendo del secado del clima y absorción del sustrato
                    </p>
    
                                   
    
                    <h2>Preparacion de la superficie</h2>
                    <p>
                         Debe estar limpia seca, libre de polvo y grasas o pintura vieja mal adherida. 
                    </p>
    
                    <h2>Aplicacion</h2>
                    <p>
                        Una vez preparada la superficie debe aplicarse con escoba o brocha restregando en varias direcciones con la intención de hacer penetrar
                        lo mejor posible el producto 
                    </p>
      

                    <h2>Presentacion</h2>
                    <p>
                       1/8 Galón
                    </p>

                    <h2>Preparacion de producto</h2>
                    <p>
                        Debe ser disuelto una porción del producto por diez porciones de agua.
                    </p>
                    
    
                    
                </div>

                <div className="col-1 ">
                  <img src={img} alt="" className="imgPinturascreen " />
                </div>
            </div>
        </div>
        
    )
}
