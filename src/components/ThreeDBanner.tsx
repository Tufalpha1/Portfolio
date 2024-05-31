"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import banner from "../../public/assets/projects/decentraconnect/banner.png";

const ThreeDBanner = () => {
    return (
        <CardContainer>
            <CardBody className="bg-transparent relative group/card  hover:shadow-emerald-500 w-auto sm:w-[30rem] h-auto rounded-xl p-6">
                <CardItem
                    translateZ="50"
                    className="px-4 py-2 rounded-xl text-xs font-bold tracking-tighter mx-auto bg-black text-white"
                >
                    Hover me
                </CardItem>
                <CardItem
                    translateZ="100"
                    rotateX={20}
                    rotateZ={-1}
                    className="w-full mt-4"
                >
                    <Image
                        src={banner}
                        height="1000"
                        width="1000"
                        className="w-full object-cover rounded-xl group-hover/card:shadow-xl shadow-emerald-500 z-20"
                        alt="thumbnail"
                        quality={100}
                    />
                </CardItem>
            </CardBody>
        </CardContainer>
    )
}

export default ThreeDBanner