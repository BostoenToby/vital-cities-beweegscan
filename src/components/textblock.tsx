import * as React from "react"
import Lottie, { useLottie } from 'lottie-react'
import { colorify, flatten, getColors, replaceColor } from 'lottie-colorify'
import arrows from '../assets/animations/arrows.json'
import balance from '../assets/animations/balance.json'
import basket from '../assets/animations/basket.json'
import bench from '../assets/animations/bench.json'
import benches from '../assets/animations/benches.json'
import bike from '../assets/animations/bike.json'
import bus from '../assets/animations/bus.json'
import car_free from '../assets/animations/car_free.json'
import car from '../assets/animations/car.json'
import children from '../assets/animations/children.json'
import city from '../assets/animations/city.json'
import concentration from '../assets/animations/concentration.json'
import criminal from '../assets/animations/criminal.json'
import euro_hand from '../assets/animations/euro_hand.json'
import euro from '../assets/animations/euro.json'
import evolution from '../assets/animations/evolution.json'
import families from '../assets/animations/families.json'
import family from '../assets/animations/family.json'
import familyseat from '../assets/animations/familyseat.json'
import fitness from '../assets/animations/fitness.json'
import handshake from '../assets/animations/handshake.json'
import house from '../assets/animations/house.json'
import houseprice from '../assets/animations/houseprice.json'
import landscape from '../assets/animations/landscape.json'
import leaf from '../assets/animations/leaf.json'
import link from '../assets/animations/link.json'
import lock from '../assets/animations/lock.json'
import loneliness from '../assets/animations/loneliness.json'
import nature from '../assets/animations/nature.json'
import old_person from '../assets/animations/old_person.json'
import park from '../assets/animations/park.json'
import pet from '../assets/animations/pet.json'
import restaurant from '../assets/animations/restaurant.json'
import school from '../assets/animations/school.json'
import shield from '../assets/animations/shield.json'
import shoppingcart from '../assets/animations/shoppingcart.json'
import thermometer from '../assets/animations/thermometer.json'
import virus from '../assets/animations/virus.json'
import walking from '../assets/animations/walking.json'
import wrench from '../assets/animations/wrench.json'
import youth from '../assets/animations/youth.json'
import zorro from '../assets/animations/zorro.json'


export default ({classes, text, animation, animationColor}: {classes: string, text: string, animation: any, animationColor: string}) => {
    let animColor: string
    if(animationColor == "purple"){
        animColor = '#492784'
    } else if (animationColor == "green"){
        animColor = '#02866C'
    } else {
        animColor = '#000000'
    }
    return(
        <div className={`flex skew-x-12 max-w-[240px] items-center leading-7 justify-self-center tabletportrait:max-w-[450px] ${classes}`}>
            <p className="px-7 py-5 -skew-x-12 desktop:line-clamp-2">{text}</p>
            <Lottie
                className="m-auto h-10 w-10 laptopL:h-20 laptopL:w-20 fill-red stroke-red"
                loop={true}
                animationData={animation}
            />
        </div>
    )
}