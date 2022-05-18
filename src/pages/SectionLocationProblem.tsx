// Dit is de eerste sectie na de header van de ambitionpage
// wat is de huidige situatie
// wat is het probleem
// copy paste dit naar de main ambitionpage

import React from 'react'
import DonutChart from '../components/donutChart'

export default () => {
    return (
        <>
            <section className="flex font-poppins mx-20 mt-32 gap-28">
                <div className="flex flex-col max-w-xl pr-10">
                    <label className="text-3xl font-black">
                        Wat is de huidige situatie in
                    </label>
                    <select className="text-3xl font-black text-purple -ml-1 underline underline-offset-4">
                        <option>het Vlaams gewest</option>
                    </select>
                    <label className="mt-5 font-medium">
                        In het Vlaams gewest is <span className="font-semibold">ongeveer de helft of meer van de
                        inwoners</span> <span className="text-pink font-semibold">niet tevreden</span> over de staat, veiligheid en
                        aantrekkelijkheid van straten, pleinen, wandel- en fietspaden
                        (dus een samenvatting van alle cijfers). 
                    </label>
                </div>
                <div className="self-end">
                    <label className="opacity-50 text-sm font-black font-mono pl-4">
                        HOEVEEL % VAN DE INWONERS IS NIET TEVREDEN OVER ... 
                    </label>
                    <table>
                        <tr>
                        <td className="p-2">
                            <div className="flex items-center">
                            <div className="w-12 h-12 mb-2">
                                <DonutChart percentage={44} />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-medium">Staat straten & pleinen</label>
                                <label className="text-pink font-bold">44%</label>
                            </div>
                            </div>
                        </td>
                        <td className="p-2">
                            <div className="flex items-center">
                            <div className="w-12 h-12 mb-2">
                                <DonutChart percentage={54} />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-medium">Staat voetpaden</label>
                                <label className="text-pink font-bold">54%</label>
                            </div>
                            </div>
                        </td>
                        <td className="p-2">
                            <div className="flex items-center">
                            <div className="w-12 h-12 mb-2">
                                <DonutChart percentage={59} />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-medium">Staat fietspaden</label>
                                <label className="text-pink font-bold">59%</label>
                            </div>
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <td className="p-2">
                            <div className="flex items-center">
                            <div className="w-12 h-12 mb-2">
                                <DonutChart percentage={55} />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-medium">Genoeg fietspaden</label>
                                <label className="text-pink font-bold">55%</label>
                            </div>
                            </div>
                        </td>
                        <td className="p-2">
                            <div className="flex items-center">
                            <div className="w-12 h-12 mb-2">
                                <DonutChart percentage={60} />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-medium">Fietsinfrastructuur</label>
                                <label className="text-pink font-bold">60%</label>
                            </div>
                            </div>
                        </td>
                        <td className="p-2">
                            <div className="flex items-center">
                            <div className="w-12 h-12 mb-2">
                                <DonutChart percentage={57}/>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-medium">Veilig fietsen</label>
                                <label className="text-pink font-bold">57%</label>
                            </div>
                            </div>
                        </td>
                        </tr>
                    </table>
                </div>
            </section>
            <section className="flex flex-col items-center font-poppins mt-32 mx-20">
                <label className="text-3xl font-black mb-5">Wat is het probleem?</label>
                <p className="mb-5">
                    Als routes geen goede verbinding maken met voorzieningen en werk of school, als ze onveilig zijn of door een weinig aantrekkelijke
                    stadsomgeving gaan, zijn mensen niet geneigd om ze te gebruiken. Als je fiets of wandelt, voel je je namelijk kwetsbaarder dan in je auto. 
                </p>
                <p className="font-black">
                    Bij een gebrek aan veilige en/of aantrekkelijke routes zullen mensen dan eerder kiezen voor de auto.
                </p>
            </section>
        </>
    )
}