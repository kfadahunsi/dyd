import asa from "/src/assets/asa.png"
import ddgp from "/src/assets/ddgp.jpg"
import dtf from "/src/assets/dtf.jpg"
import mmufc from "/src/assets/mmufc.jpg"
import sls from "/src/assets/sls.jpeg"
import ssfc from "/src/assets/ssfc.jpeg"

import kevwe from "/src/assets/managers/kevwe.png"
import kola from  "/src/assets/managers/kola.jpg"
import duey from  "/src/assets/managers/duey.jpg"
import fisi from  "/src/assets/managers/fisi.jpg"
import ade from  "/src/assets/managers/ade.jpg"
import kp from  "/src/assets/managers/kp.jpg"

import awfcC from "/src/assets/champions/awfc.jpg"
import dtfC from "/src/assets/champions/dtf.jpg"
import genericC from "/src/assets/champions/generic.png"
import lasaC from "/src/assets/champions/lasa.jpeg"
import mmufcC from "/src/assets/champions/mmufc.jpg"
import wogaC from "/src/assets/champions/woga.jpg"


import awfcR from "/src/assets/relegated/awfc.jpg"
import cpfcR from "/src/assets/relegated/cpfc.jpg"
import dnnR from "/src/assets/relegated/dnn.jpg"
import genericR from "/src/assets/relegated/generic.png"
import lasaR from "/src/assets/relegated/lasa.jpeg"
import rbfbR from "/src/assets/relegated/rbfb.jpeg"
import wogaR from "/src/assets/relegated/woga.jpg"
import ysmR from "/src/assets/relegated/ysm.jpeg"



export const managerList = [
    {
        club: "Amassing Silvaware Athletic",
        acronym: "KF",
        name: "Kevwe Fadahunsi",
        badgeImage: asa,
        twitter: "https://x.com/AS_Athletic",
        est: 2025,
        formerClubs: [{name: "Loic Remy Boys", est: 2017, reason: "Founder", status: "Rebranded"}, {name: "WaivereDalot of Gems", est: 2018, reason: "Rebrand", status: "Relegated"}],
        managerImg: kevwe,
        teamAcronym: "ASA",

    },
    {
        club: "Darwin's Theory Futbol",
        acronym: "KF1",
        name: "Kola Fadahunsi",
        badgeImage: dtf,
        twitter: "https://x.com/DarwinsTheory_",
        est: 2022,
        formerClubs: [{name: "Sarri for Yourself", est: 2018, reason: "New Member", status: "Rebranded"}, {name: "Law Abiding Sigurdssons", est: 2019, reason: "Rebrand", status: "Relegated"}],
        managerImg: kola,
        teamAcronym: "DTF",
    },
    {
        club: "Saint Laurent Slot",
        acronym: "FA",
        name: "Fisayo Ayodeji",
        badgeImage: sls,
        twitter: "https://x.com/SLS__FC",
        est: 2024,
        formerClubs: [{name: "Rather You Than Mee", est: 2017, reason: "Founder", status: "Relegated"}, {name: "AstroWorld FC", est: 2018, reason: "New Entrant", status: "Relegated"}],
        managerImg: fisi,
        teamAcronym: "SLS",
    },
    {
        club: "Maatsen Margiela United FC",
        acronym: "AP",
        name: "Ademide Peters",
        badgeImage: mmufc,
        twitter: "https://x.com/MaatsenMargiela",
        est: 2023,
        formerClubs: [{name: "A1won Boys", est: 2017, reason: "Founder", status: "Rebranded"}, {name: "Chapman Papi FC", est: 2018, reason: "Rebrand", status: "Rebranded"}, {name: "Old Town Rose FC", est: 2019, reason: "Rebrand", status: "Rebranded"}, {name: "Chapman Papi FC", est: 2019, reason: "Rebrand", status: "Relegated"}, {name: "Yves Saint Maximin", est: 2021, reason: "New Entrant", status: "Relegated"}],
        managerImg: ade,
        teamAcronym: "MMUFC",

    },
    {
        club: "Super Slimey Futbol",
        acronym: "AA",
        name: "Afolabi Adebajo",
        badgeImage: ssfc,
        twitter: "https://x.com/FcSlimey",
        est: 2019,
        formerClubs: [{name: "A7's Warriors", est: 2017, reason: "Founder", status: "Rebranded"}, {name: "Duey Not Nice", est: 2017, reason: "Rebrand", status: "Relegated"}],
        managerImg: duey,
        teamAcronym: "SSFC",

    },
    {
        club: "Duck Duck Guus Poyet",
        acronym: "KA",
        name: "Kolapo Akande",
        badgeImage: ddgp,
        twitter: "https://x.com/JiSungParkBusFC",
        est: 2025,
        formerClubs: [{name: "Pique Blinders FC", est: 2018, reason: "New Member", status: "Rebranded"}, {name: "Red Bull Faults-Burg", est: 2020, reason: "Rebrand", status: "Relegated"},{name: "Ji Sung Park The Bus FC", est:2021, reason: "New entrant", status: "Rebranded"} ],
        managerImg: kp,
        teamAcronym: "DDGP",
    },
]

export const championsList = [
    {
        name: "Loic Remy Boys",
        manager: "Kevwe Fadahunsi",
        year: "17/18",
        points: 1956,
        img: genericC,
    },
    {
        name: "Astroworld FC",
        manager: "Fisayo Ayodeji",
        year: "18/19",
        points: 1858,
        img: awfcC,
    },
    {
        name: "Law Abiding Sigurdssons",
        manager: "Kola Fadahunsi",
        year: "19/20",
        points: 1863,
        img: lasaC,
    },
    {
        name: "Law Abiding Sigurdssons",
        manager: "Kola Fadahunsi",
        year: "20/21",
        points: 1892,
        img: lasaC,
    },
    {
        name: "WaivereDalot of Gems",
        manager: "Kevwe Fadahunsi",
        year: "21/22",
        points: 2044,
        img: wogaC,
    },
    {
        name: "Darwins Theory Futbol",
        manager: "Kola Fadahunsi",
        year: "22/23",
        points: 1923,
        img: dtfC,
    },
     {
        name: "Darwins Theory Futbol",
        manager: "Kola Fadahunsi",
        year: "23/24",
        points: 1880,
        img: dtfC,
    },
    {
        name: "Maatsen Margiela United FC",
        manager: "Ademide Peters",
        year: "24/25",
        points: 1786,
        img: mmufcC,
    },
]

export const relegationList = [
    {
        name: "Rather You Than Mee",
        manager: "Fisayo Ayodeji",
        year: "17/18",
        points: 1697,
        img: genericR,
    },
    {
        name: "Duey Not Nice",
        manager: "Afolabi Adebajo",
        year: "18/19",
        points: 1699,
        img: dnnR,
    },
    {
        name: "Chapman Papi",
        manager: "Ademide Peters",
        year: "19/20",
        points: 1588,
        img: cpfcR,
    },
    {
        name: "Red Bull Faults-Burg",
        manager: "Kolapo Akande",
        year: "20/21",
        points: 1781,
        img: rbfbR,
    },
    {
        name: "Law Abiding Sigurdssons",
        manager: "Kola Fadahunsi",
        year: "21/22",
        points: 1740,
        img: lasaR,
    },
    {
        name: "Yves Saint Maximin",
        manager: "Ademide Peters",
        year: "22/23",
        points: 1651,
        img: ysmR,
    },
     {
        name: "Astroworld FC",
        manager: "Fisayo Ayodeji",
        year: "23/24",
        points: 1769,
        img: awfcR,
    },
    {
        name: "WaivereDalot of Gems Athletic",
        manager: "Kevwe Fadahunsi",
        year: "24/25",
        points: 1732,
        img: wogaR,
    },
]


export const premList = {
    ARS: {
        primary: "bg-[#e20613]",
        secondary: "bg-white"
    },
    MCI: {
        primary: "bg-[#8fbce6]",
        secondary: "bg-white"
    },
    MUN: {
        primary: "bg-[#da020e]",
        secondary: "bg-[#fbce02]"
    },
    AVL: {
        primary: "bg-[#a7a2b8]",
        secondary: "bg-[#a0c5e7]"
    },
    LIV: {
        primary: "bg-[#e1323c]",
        secondary: "bg-[#e1323c]"
    },
    CHE: {
        primary: "bg-[#153d8a]",
        secondary: "bg-[#e1d6b2]"
    },
    BRE: {
        primary: "bg-[#d72121]",
        secondary: "bg-[#c1c1c1]"
    },
    EVE: {
        primary: "bg-[#014593]",
        secondary: "bg-[#014593]"
    },
    FUL: {
        primary: "bg-white",
        secondary: "bg-black"
    },
    BHA: {
        primary: "bg-[#004899]",
        secondary: "bg-white"
    },
    SUN: {
        primary: "bg-[#db1f23]",
        secondary: "bg-[#9f895d]"
    },
    NEW: {
        primary: "bg-black",
        secondary: "bg-white"
    },
    BOU: {
        primary: "bg-[#940e10]",
        secondary: "bg-black"
    },
    CRY: {
        primary: "bg-[#0e5ea9]",
        secondary: "bg-[#9a89a1]"
    },
    LEE: {
        primary: "bg-[#ffdf00]",
        secondary: "bg-[#0c5e9a]"
    },
    NFO: {
        primary: "bg-[#e13137]",
        secondary: "bg-white"
    },
    TOT: {
        primary: "bg-white",
        secondary: "bg-[#000a3c]"
    },
    WHU: {
        primary: "bg-[#7c2c3b]",
        secondary: "bg-[#f5d23e]"
    },
    BUR: {
        primary: "bg-[#5f0041]",
        secondary: "bg-white"
    },
    WOL: {
        primary: "bg-[#fdb913]",
        secondary: "bg-black"
    },

    }