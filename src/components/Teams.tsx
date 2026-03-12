import {   Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "./ui/card"

const teamList = [
    {
        name: "Amassing Silvaware Athletic",
        acronym: "ASA",
        manager: "Kevwe Fadahunsi",
        badgeImage: "asa.png",
    },
    {
        name: "Darwin's Theory Futbol",
        acronym: "DTF",
        manager: "Kola Fadahunsi",
        badgeImage: "dtf.jpg",
    },
    {
        name: "Saint Laurent Slot",
        acronym: "SLS",
        manager: "Fisayo Ayodeji",
        badgeImage: "sls.jpeg",
    },
    {
        name: "Maatsen Margiela United FC",
        acronym: "MMUFC",
        manager: "Ademide Peters",
        badgeImage: "mmufc.jpg",
    },
    {
        name: "Super Slimey Futbol",
        acronym: "SSFC",
        manager: "Afolabi Adebajo",
        badgeImage: "ssfc.jpeg",
    },
    {
        name: "Duck Duck Guus Poyet",
        acronym: "DDGP",
        manager: "Kolapo Akande",
        badgeImage: "ddgp.jpg",
    },
]
export default function Teams() {
  return (
    <div className="flex flex-col items-center overflow-y-auto mt-3 border-2 border-black">
        {teamList.map((team)=>{
            return <div key={team.name} className="w-10/12">
                        <Card className="mt-3">
                            <CardHeader>
                                <CardTitle>{team.name}</CardTitle>
                                <CardDescription>AKA: {team.acronym}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <img className="h-30" src={team.badgeImage}/>
                                <p>Manager: {team.manager}</p>
                            </CardContent>
                        </Card>
                    </div>
        })}
    </div>
  )
}
