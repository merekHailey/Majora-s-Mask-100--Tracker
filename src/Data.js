
export function FindStateByName(name){
    for(let i = 0; i < Gamestates.length; i++){
        if(Gamestates[i].name === name){
            return Gamestates[i]
        }
    }
    return undefined
}


export class GameState{
    constructor(id, name){
        this.id = id
        this.name = name
        this.isActive = false
    }
}

export class Objective{

    constructor(index, name, day, time, gameState, itemRecs, bottles, cost, estTime, cycleNum, priority, notes){
        this.index = index
        this.name = name
        this.day = day
        this.time = time
        this.gameState = gameState
        this.itemRecs = itemRecs
        this.bottles = bottles
        this.cost = cost
        this.estTime = estTime
        this.cycleNum = cycleNum
        this.priority = priority
        this.defaultPriority = priority
        this.possible = false
        this.potential = false
        this.complete = false
        this.notes = notes
    }
}
export var Gamestates = [
    new GameState(0, "Boat Access"),
    new GameState(1,"Grandma Saved"),
    new GameState(2, "Romani Friended"),
    new GameState(3, "Swamp Cleared")  ,
    new GameState(4, "Spring Time") ,
    new GameState(5, "Ocean Cleared") , 
    new GameState(6, "Ikana Cleansed") , 
    new GameState(7, "Deed Quest Started") , 
    new GameState(8, "Romani Stone Removed"), 
    new GameState(9, "Scarecrow Song") ,
    new GameState(10, "Anju Meeting") ,
    new GameState(11, "Letter Delivered") ,
    new GameState(12, "Kafei Trust") ,
    new GameState(13, "Priority Mail Recieved") ,
    new GameState(14, "Pendant Delivered") ,
    new GameState(15, "Operation Sol Mates")
]



var SongOfTime = new Objective(0, "Song of Time", null, null, null, ["Ocarina of Time"], 0, 0, 0, 0, 4)
var SongOfHealing = new Objective(1, "Song of Healing", null, null, null, ["Song of Time", "Ocarina of Time"], 0, 0, 0, 0, 4)
var SongOfSoaring = new Objective(2, "Song of Soaring", null, null, [FindStateByName("Boat Access")], ["Ocarina of Time"], 0, 0, 0, 1, 4)
var SongOfAwakening = new Objective(3, "Song of Awakening", null, null, [FindStateByName("Boat Access")], ["Ocarina of Time", "Deku Mask"], 0, 0, 180, 1, 2)
var OathToOrder = new Objective(4, "Oath To Order", null, null, [FindStateByName("Swamp Cleared")], null, 0, 0, 0, 1, 1)
var GoronsLulluby = new Objective(5, "Goron's Lulluby", null, null, null, ["Goron Mask"], 1, 0, 45, 1, 2)
var EponasSong = new Objective(6, "Epona's Song", "Day 1", null, null, ["Powder Keg Licence"], 0, 0, 20, 2, 1, "Can get early by hovering")
var NewWaveBossaNova = new Objective(7, "New Wave Bossa Nova", null, null, null, ["Zora Mask"], 4, 0, 360, 2, 1)
var SongOfStorms = new Objective(8, "Song of Storms", "Night 1", null, null, ["Captain's Hat"], 0, 0, 15, 2, 1)
var ElegyOfEmptiness = new Objective(9, "Elegy of Emptiness", null, null, null, ["Mirror Shield", "Powder Keg Licence"], 0, 0, 180, 2, 2, "Don't Forget Pwder Keg")

var BombBag = new Objective(10, "Bomb Bag", null, null, null, null, 0, 50, 5, 0, 3)
var OcarinaOfTime = new Objective(11, "Ocarina of Time", null, null, [FindStateByName("Deed Quest Started")], ["Magic"], 0, 0, 0, 0, 5)
var PictoBox = new Objective(12, "Picto Box", null, null, null, ["Koume Bottle"], 0, 0, 5, 1, 5)
var Bow = new Objective(13, "Bow", null, null, null, ["Song of Awakening"], 0, 0, 0, 1, 2)
var LensOfTruth = new Objective(14, "Lens of Truth", null, null, null, ["Bow", "Bomb Bag"], 0, 0, 10, 1, 3)
var FireArrows = new Objective(15, "Fire Arrows", null, null, null, ["Goron's Lulluby"], 0, 0, 0, 1, 2)
var PowderKegLicence = new Objective(16, "Powder Keg Licence", null, null, [FindStateByName("Spring Time")], ["Goron Mask"], 0, 0, 30, 1, 2)
var Hookshot = new Objective(17, "Hookshot", null, null, null, ["Zora Mask"], 3, 0, 120, 2, 2)
var IceArrows = new Objective(18, "Ice Arrows", null, null, null, ["New Wave Bossa Nova"], 0, 0, 0, 2, 2)
var LightArrows = new Objective(19, "Light Arrows", null, null, null, ["Elegy of Emptiness"], 0, 0, 0, 2, 2)
var GreatFairySword = new Objective(20, "Great Fairy Sword", null, null, null, ["Elegy of Emptiness"], 0, 0, 300, 2, 3)

var KoumeBottle = new Objective(21, "Koume Bottle", null, null, null, ["Deku Mask"], 0, 0, 15, 1, 3)
var GoldDustBottle = new Objective(22, "Gold Dust Bottle", null, null, [FindStateByName("Spring Time")], ["Fire Arrows"], 0, 0, 30, 1, 1)
var BeaverRaceBottle = new Objective(23, "Beaver Race Bottle", null, null, null, ["Hookshot"], 0, 0, 30, 1, 3)
var AlienBottle = new Objective(24, "Alien Bottle", "Day 1", "02:00-05:30", null, ["Powder Keg Licence", "Bow"], 0, 0, 300, 2, 1)
var PriorityMailBottle = new Objective(25, "Priority Mail Bottle", "Night 3", null, [FindStateByName("Priority Mail Recieved")], ["Romani Mask"], 0, 0, 10, 1, 1)
var DampeGameBottle = new Objective(26, "Dampe' Game Bottle", "Night 3", null, null, ["Captain's Hat"], 0, 0, 60, 2, 1, "Do after Sun Mask?")

var DekuMask = new Objective(27, "Deku Mask", null, null, null, ["Ocarina of Time"], 0, 0, 0, 1, 1)
var GoronMask = new Objective(28, "Goron Mask", null, null, null, ["Lens of Truth"], 0, 0, 30, 1, 2)
var ZoraMask = new Objective(29, "Zora Mask", null, null, null, ["Goron Mask"], 0, 0, 10, 2, 3, "Can Be Achieved with Goron Mask Early")
var GreatFairyMask = new Objective(30, "Great Fairy Mask", null, null, null, ["Ocarina of Time"], 0, 0, 10, 1, 1)
var KafeisMask = new Objective(31, "Kafei's Mask", "Day 1", "10:00-12:00", null, ["Ocarina of Time"], 0, 0, 10, 1, 1)
var KamaroMask = new Objective(32, "Kamaro Mask", "Night 1", "00:00-04:00", null, ["Ocarina of Time"], 0, 0, 15, 1, 2)
var BlastMask = new Objective(33, "Blast Mask", "Night 1", "00:00", null, ["Ocarina of Time"], 0, 0, 15, 1, 1, "DO NOT DO THIS on a Couple's Mask run")
var BremmenMask = new Objective(34, "Bremmen Mask", "Night 1 or Night 2", null, null, ["Ocarina of Time"], 0, 0, 10, 1, 3)
var MaskOfScents = new Objective(35, "Mask of Scents", null, null, [FindStateByName("Swamp Cleared")], ["Bow"], 0, 0, 30, 1, 3)
var MaskOfTruth = new Objective(36, "Mask of Truth", null, null, null, ["Song of Awakening"], 1, 0, 180, 1, 3)
var DonGeroMask = new Objective(37, "Don Gero Mask", null, null, null, ["Goron's Lulluby"], 0, 0, 30, 1, 4)
var BunnyHood = new Objective(38, "Bunny Hood", null, null, null, ["Powder Keg Licence"], 0, 0, 45, 1, 1, "Can get Day 3")
var KeatonMask = new Objective(39, "Keaton Mask", "Day 3", "13:00-18:00", [FindStateByName("Pendant Delivered")], ["Kafei's Mask"], 0, 0, 10, 1, 5)
var PostmansHat = new Objective(40, "Postman's Hat", "Night 3", null, [FindStateByName("Priority Mail Recieved")], null, 0, 0, 45, 1, 5)
var AllNightMask = new Objective(41, "All-Night Mask", "Night 3", "01:00-06:00", [FindStateByName("Grandma Saved")], ["Giant's Wallet"], 0, 500, 10, 1, 2)
var RomaniMask = new Objective(42, "Romani Mask", "Night 2", "18:00", [FindStateByName("Romani Friended")], ["Alien Bottle"], 0, 0, 60, 2, 1)
var GormanTroupeMask = new Objective(43, "Gorman Troupe Mask", "Night", "22:00-06:00", null, ["Romani Mask", "Zora Mask"], 0, 0, 20, 1, 4)
var StoneMask = new Objective(44, "Stone Mask", null, null, null, ["Lens of Truth", "Goron Mask"], 1, 20, 40, 1, 4)
var CouplesMask = new Objective(45, "Couple's Mask", "Night 3", "04:30", [FindStateByName("Pendant Delivered"), FindStateByName("Kafei Trust")], ["Hookshot", "Garo Mask"], 0, 0, 60, 2, 1)
var GibdoMask = new Objective(46, "Gibdo Mask", null, null, null, ["Hookshot"], 0, 0, 45, 2, 3)
var GaroMask = new Objective(47, "Garo Mask", "Day", null, null, ["Epona's Song"], 0, 10, 45, 2, 2)
var CaptainsHat = new Objective(48, "Captain's Hat", null, null, null, ["Song of Awakening", "Goron Mask"], 0, 0, 30, 1, 3)
var GiantsMask = new Objective(49, "Giant's Mask", null, null, null, ["Light Arrows"], 0, 0, 0, 2, 5)
var FierceDietyMask = new Objective(50, "Fierce Diety Mask", null, null, null, ["Mask of Scents", "Mask of Truth", "Deku Mask", "Garo Mask", "Zora Mask", "Blast Mask", "Gibdo Mask", "Goron Mask", "Stone Mask", "Giant's Mask", "Kafei's Mask", "Kamaro Mask", "Keaton Mask", "Romani Mask", "Bremmen Mask", "Couple's Mask", "Don Gero Mask", "All-Night Mask", "Captain's Hat", "Postman's Hat", "Great Fairy Mask", "Bunny Hood"], 0, 0, 0, 2, 5, "You be the bad guy")

var BomberJournal = new Objective(51, "Bomber Journal", null, null, null, ["Ocarina of Time"], 0, 0, 45, 1, 1)
var AdultsWallet = new Objective(52, "Adult's Wallet", null, null, null, null, 0, 200, 0, 0, 4, "Play Deku Game")
var GiantsWallet = new Objective(53, "Giant's Wallet", "Day 1", null, null, ["Hookshot"], 1, 0, 180, 1, 1)
var QuiverUpgrade1 = new Objective(54, "Quiver Upgrade (Town)", null, "06:00-20:00", null, ["Bow"], 0, 20, 90, 1, 4)
var QuiverUpgrade2 = new Objective(55, "Quiver Upgrade (Swamp)", null, "06:00-20:00", null, ["Bow"], 0, 20, 90, 1, 4)
var BombBagUpgrade1 = new Objective(56, "Bomb Bag Upgrade (Granny)", "Day 2 or Day 3 or Night 2 or Night 3", null, [FindStateByName("Grandma Saved")], null, 0, 90, 10, 1, 4)
var BombBagUpgrade2 = new Objective(57, "Bomb Bag Upgrade (Mountains)", null, null, null, ["Adult's Wallet", "Goron Mask", "Bomb Bag Upgrade (Granny)"], 0, 200, 30, 1, 3, "Do during Deed Run")
var GildedSword = new Objective(58, "Gilded Sword", "Day 1", null, null, ["Fire Arrows"], 1, 100, 0, 2, 1, "Set alarms for each morning")
var MirrorShield = new Objective(59, "Mirror Shield", null, null, null, ["Gibdo Mask"], 3, 50, 45, 2, 2, "Bring: 5 beans, 10 nuts, 10 bombs, fish, milk, keg")
var Magic = new Objective(60, "Magic", null, null, null, null, 0, 0, 5, 0, 1)
var SpinAttackUpgrade = new Objective(61, "Spin Attack Upgrade", null, null, null, ["Song of Awakening"], 0, 0, 300, 1, 2)
var MagicUpgrade = new Objective(62, "Magic Upgrade", null, null, null, ["Goron's Lulluby"], 0, 0, 300, 1, 2)
var DefenseUpgrade = new Objective(63, "Defense Upgrade", null, null, null, ["New Wave Bossa Nova"], 0, 0, 300, 2, 2)

var PoHNorthCTTree = new Objective(64, "PoH: North CT Tree", null, null, null, ["Ocarina of Time"], 0, 0, 5, 1, 1)
var PoHSouthCTPlatform = new Objective(65, "PoH: South CT Platform", null, null, null, null, 0, 0, 0, 0, 5)
var PoHMilkRoadGrotto = new Objective(66, "PoH: Grotto on the way to Milk Road", null, null, null, ["Ocarina of Time"], 0, 0, 20, 1, 4)
var PoHDekuPalaceLeftSide = new Objective(67, "PoH: Deku Palace Left Side", 0, 0, [FindStateByName("Boat Access")], ["Ocarina of Time"], 0, 0, 15, 1, 3)
var PoHRoadToSwamp = new Objective(68, "PoH: Road to Swamp", null, null, null, ["Bow"], 0, 0, 10, 1, 4)
var PoHSwordTrainingDojo = new Objective(69, "PoH: Sword Training Dojo", null, null, null, ["Ocarina of Time"], 0, 10, 45, 1, 5)
var PoHNorthTFGrotto = new Objective(70, "PoH: North TF Grotto", null, null, null, ["Ocarina of Time"], 0, 0, 15, 1, 5)
var PoHDekuScrubPlayground = new Objective(71, "PoH: Deku Scrub Playground", null, null, null, null, 0, 10, 120, 0, 1, "Play constantly for money")
var PoHPostmanGame = new Objective(72, "PoH: Postman Game", "Day 1 or Day 2", "15:00-00:00 or 17:00-00:00", null, null, 0, 2, 30, 0, 2)
var PoHKamaroDance = new Objective(73, "PoH: Kamaro Dance", "Night", null, null, ["Kamaro Mask"], 0, 0, 10, 1, 5)
var PoHQMarks = new Objective(74, "PoH: ???", "Night", "00:00-06:00", [FindStateByName("Deed Quest Started")], null, 0, 0, 5, 0, 1)
var PoHBuisnessScrubGrotto = new Objective(75, "PoH: Business Scrub Grotto", null, null, [FindStateByName("Deed Quest Started")], ["Adult's Wallet"], 0, 100, 30, 1, 4, "Say no for the discount")
var PoHKeatonQuiz = new Objective(76, "PoH: Keaton Quiz", null, null, null, ["Keaton Mask"], 0, 0, 10, 1, 5)
var PoHMailbox = new Objective(77, "PoH: Mailbox", null, null, null, ["Postman's Hat"], 0, 0, 5, 1, 5)
var PoHSwampDeed = new Objective(78, "PoH: Swamp Deed", null, null, [FindStateByName("Deed Quest Started")], null, 0, 0, 10, 1, 4)
var PoHTinglePicture = new Objective(79, "PoH: Tingle Picture", null, null, [FindStateByName("Boat Access")], ["Picto Box"], 0, 0, 20, 1, 2, "Cannot Complete if Swamp Saved")
var PoHWoodfallPlatform = new Objective(80, "PoH: Woodfall Platform", null, null, null, ["Song of Awakening"], 0, 0, 10, 1, 3)
var PoHFourGossipStones = new Objective(81, "PoH: Four Gossip Stones", null, null, null, ["Song of Awakening"], 0, 0, 60, 1, 4, "NE of NCT, N of WCT, Between MR and Swamp, Left of Scope")
var PoHKoumeGame = new Objective(82, "PoH: Koume's Game", null, null, [FindStateByName("Swamp Cleared")], ["Bow"], 0, 0, 45, 1, 2)
var PoHDogRace = new Objective(83, "PoH: Dog Race", null, "06:00-20:00", null, ["Mask of Truth"], 0, 50, 30, 1, 4, "Mask of Truth Recommended")
var PoHShootingGallery1 = new Objective(84, "PoH: Shooting Gallery (Town)", null, "06:00-22:00", null, ["Bow"], 0, 20, 30, 1, 3)
var PoHShootingGallery2 = new Objective(85, "PoH: Shooting Gallery (Swamp)", null, "06:00-22:00", null, ["Bow"], 0, 20, 30, 1, 3)
var PoHHoneyAndDarlingGames = new Objective(86, "PoH: Honey and Darling Games", null, "06:00-22:00", null, ["Bomb Bag", "Bow"], 0, 10, 40, 1, 4, "Set Alarms for each morning")
var PoHMountainDeed = new Objective(87, "PoH: Mountain Deed", null, null, [FindStateByName("Deed Quest Started")], ["Bomb Bag", "Bow"], 0, 0, 20, 1, 4)
var PoHTreasureChestGame = new Objective(88, "PoH: Treasure Chest Game", null, null, null, ["Goron Mask"], 0, 30, 15, 1, 5, "Goron Version")
var PoHIkanaGraveyard = new Objective(89, "PoH: Ikana Graveyard", "Night 2", null, null, ["Goron Mask"], 0, 0, 25, 1, 4, "Can do early with Goron Mask")
var PoHGrottoByGreatBay = new Objective(90, "PoH: Grotto by Great Bay", null, null, null, ["Goron Mask"], 0, 0, 15, 1, 5)
var PoHPirahna = new Objective(91, "PoH: Pirahna", null, null, null, ["Goron Mask"], 3, 0, 45, 1, 5)
var PoHZoraCapeWaterfall = new Objective(92, "PoH: Zora Cape Waterfall", null, null, null, ["Zora Mask"], 0, 0, 15, 1, 5)
var PoHPiratesFortress = new Objective(93, "PoH: Pirates' Fortress", null, null, null, ["Zora Mask"], 0, 0, 10, 1, 4)
var PoHSeahorse = new Objective(94, "PoH: Seahorse", null, null, null, ["Zora Mask", "Picto Box"], 0, 0, 60, 1, 2, "Stone Mask recommended")
var PoHIndigoGos = new Objective(95, "PoH: Indigo-Gos", null, null, null, ["Zora Mask"], 0, 0, 20, 1, 5, "Play Ballad for Evan as Human")
var PoHOceanDeed = new Objective(96, "PoH: Ocean Deed", null, null, [FindStateByName("Deed Quest Started")], ["Zora Mask"], 0, 0, 10, 1, 2)
var PoHBeaverRace = new Objective(97, "PoH: Beaver Race", null, null, null, ["Hookshot"], 0, 0, 90, 1, 2)
var PoHSnowheadRoad = new Objective(98, "PoH: Snowhead Road", null, null, [FindStateByName("Scarecrow Song")], ["Hookshot"], 0, 0, 20, 1, 5)
var PoHPirateLagoon = new Objective(99, "PoH: PirateLagoon", null, null, [FindStateByName("Scarecrow Song")], ["Hookshot", "Song of Storms"], 0, 0, 30, 1, 4, "Need a Magic Bean")
var PoHSkullHouseColorPuzzle = new Objective(100, "PoH: Skull House Color Puzzle", null, null, null, ["Hookshot", "Captain's Hat"], 0, 0, 45, 1, 3)
var PoHStoryTimeFestival = new Objective(101, "PoH: Story Time: Festival", "Day", null, null, ["All-Night Mask"], 0, 0, 120, 2, 2, "Will Lose 2 Hours")
var PoHStoryTimeGiants = new Objective(102, "PoH: Story Time: Giants", "Day 1 or Day 2", "15:50", null, ["All-Night Mask"], 0, 0, 720, 2, 2, "Will Skip an Entire Night! Do as late as possible")
var PoHIkanaDeed = new Objective(103, "PoH: Ikana Deed", null, null, [FindStateByName("Deed Quest Started")], ["Hookshot", "Garo Mask"], 0, 0, 30, 1, 3)
var PoHCouplesMaskPeace = new Objective(104, "PoH: Couple's Mask Peace", null, null, null, ["Couple's Mask"], 0, 0, 15, 2, 4)
var PoHRoadToGoronVillageUnderwater = new Objective(105, "PoH: Road To Goron Village Underwater", null, null, [FindStateByName("Spring Time")], ["Zora Mask"], 0, 0, 25, 1, 1, "Do this before reset or with Don Gero")
var PoHDonGerosChoir = new Objective(106, "PoH: Don Gero's Choir", null, null, [FindStateByName("Spring Time")], ["Don Gero Mask", "Ice Arrows"], 0, 0, 180, 1, 2, "Do First Cycle if Possible")
var PoHFishermanIslandGame = new Objective(107, "PoH: Fisherman Island Game", null, null, [FindStateByName("Ocean Cleared")], ["Hookshot"], 0, 0, 45, 1, 2, "Find Boat NW of entrance to Great Bay")
var PoHPoeGame = new Objective(108, "PoH: Poe game", null, null, null, ["Garo Mask", "Hookshot"], 0, 30, 45, 2, 5)
var PoHIkanaCastlePillar = new Objective(109, "PoH: Ikana Castle Pillar", null, null, null, ["Mirror Shield"], 0, 0, 10, 2, 2)
var PoHUpstreamShrine = new Objective(110, "PoH: Upstream Shrine", null, null, null, ["Light Arrows"], 0, 0, 45, 2, 4)
var PoH5000RupeeBank = new Objective(111, "PoH: 5,000 Rupees in Bank", null, null, null, null, 0, 5000, 0, 0, 5)
var PoHMoon1 = new Objective(112, "PoH: Moon Odalwa", null, null, null, ["Mask of Scents", "Mask of Truth", "Deku Mask", "Garo Mask", "Zora Mask", "Blast Mask", "Gibdo Mask", "Goron Mask", "Stone Mask", "Giant's Mask", "Kafei's Mask", "Kamaro Mask", "Keaton Mask", "Romani Mask", "Bremmen Mask", "Couple's Mask", "Don Gero Mask", "All-Night Mask", "Captain's Hat", "Postman's Hat", "Great Fairy Mask", "Bunny Hood"], 0, 0, 0, 2, 1)
var PoHMoon2 = new Objective(113, "PoH: Moon Goht", null, null, null, ["Mask of Scents", "Mask of Truth", "Deku Mask", "Garo Mask", "Zora Mask", "Blast Mask", "Gibdo Mask", "Goron Mask", "Stone Mask", "Giant's Mask", "Kafei's Mask", "Kamaro Mask", "Keaton Mask", "Romani Mask", "Bremmen Mask", "Couple's Mask", "Don Gero Mask", "All-Night Mask", "Captain's Hat", "Postman's Hat", "Great Fairy Mask", "Bunny Hood"], 0, 0, 0, 2, 2)
var PoHMoon3 = new Objective(114, "PoH: Moon Gyorg", null, null, null, ["Mask of Scents", "Mask of Truth", "Deku Mask", "Garo Mask", "Zora Mask", "Blast Mask", "Gibdo Mask", "Goron Mask", "Stone Mask", "Giant's Mask", "Kafei's Mask", "Kamaro Mask", "Keaton Mask", "Romani Mask", "Bremmen Mask", "Couple's Mask", "Don Gero Mask", "All-Night Mask", "Captain's Hat", "Postman's Hat", "Great Fairy Mask", "Bunny Hood"], 0, 0, 0, 2, 3)
var PoHMoon4 = new Objective(115, "PoH: Moon Twinmold", null, null, null, ["Mask of Scents", "Mask of Truth", "Deku Mask", "Garo Mask", "Zora Mask", "Blast Mask", "Gibdo Mask", "Goron Mask", "Stone Mask", "Giant's Mask", "Kafei's Mask", "Kamaro Mask", "Keaton Mask", "Romani Mask", "Bremmen Mask", "Couple's Mask", "Don Gero Mask", "All-Night Mask", "Captain's Hat", "Postman's Hat", "Great Fairy Mask", "Bunny Hood"], 0, 0, 0, 2, 4)

var MapClockTown = new Objective(116, "Map: Clock Town", null, null, null, ["Magic"], 0, 5, 5, 0, 3)
var MapRomaniRanch = new Objective(117, "Map: Romani Ranch", null, null, null, ["Ocarina of Time"], 0, 20, 5, 1, 3)
var MapWoodfall = new Objective(118, "Map: Woodfall", null, null, null, ["Magic"], 0, 40, 5, 0, 3)
var MapSnowhead = new Objective(119, "Map: Snowhead", null, null, null, ["Bow", "Bomb Bag"], 0, 20, 5, 1, 3)
var MapGreatBay = new Objective(120, "Map: Great Bay", null, null, null, ["Goron Mask", "Bow"], 0, 20, 5, 1, 3)
var MapIkana = new Objective(121, "Map: Ikana", null, null, null, ["Hookshot", "Garo Mask"], 0, 20, 5, 2, 3)
//var Map = new Objective(index, "Map: ", Day, time, gameState, itemRecs, bottles, cost, estTime, cycleNum, priority, notes)

export var Data = [
    SongOfTime,
    SongOfHealing,
    SongOfSoaring,
    SongOfAwakening,
    OathToOrder,
    GoronsLulluby,
    EponasSong,
    NewWaveBossaNova,
    SongOfStorms,
    ElegyOfEmptiness,

    BombBag,
    OcarinaOfTime,
    PictoBox,
    Bow,
    LensOfTruth, 
    FireArrows,
    PowderKegLicence, 
    Hookshot,
    IceArrows,
    LightArrows,
    GreatFairySword,

    KoumeBottle,
    GoldDustBottle,
    BeaverRaceBottle,
    AlienBottle,
    PriorityMailBottle,
    DampeGameBottle,

    DekuMask,
    GoronMask,
    ZoraMask,
    GreatFairyMask,
    KafeisMask,
    KamaroMask,
    BlastMask,
    BremmenMask,
    MaskOfScents,
    MaskOfTruth,
    DonGeroMask,
    BunnyHood,
    KeatonMask,
    PostmansHat,
    AllNightMask,
    RomaniMask,
    GormanTroupeMask,
    StoneMask,
    CouplesMask,
    GibdoMask,
    GaroMask,
    CaptainsHat,
    GiantsMask,
    FierceDietyMask,

    
    BomberJournal,
    AdultsWallet,
    GiantsWallet,
    QuiverUpgrade1,
    QuiverUpgrade2,
    BombBagUpgrade1,
    BombBagUpgrade2,
    GildedSword,
    MirrorShield,
    Magic,
    SpinAttackUpgrade,
    MagicUpgrade,
    DefenseUpgrade,

    PoHNorthCTTree,
    PoHSouthCTPlatform,
    PoHMilkRoadGrotto,
    PoHDekuPalaceLeftSide,
    PoHRoadToSwamp,
    PoHSwordTrainingDojo,
    PoHNorthTFGrotto,
    PoHDekuScrubPlayground,
    PoHPostmanGame,
    PoHKamaroDance,
    PoHQMarks,
    PoHBuisnessScrubGrotto,
    PoHKeatonQuiz,
    PoHMailbox,
    PoHSwampDeed,
    PoHTinglePicture,
    PoHWoodfallPlatform,
    PoHFourGossipStones,
    PoHKoumeGame,
    PoHDogRace,
    PoHShootingGallery1,
    PoHShootingGallery2,
    PoHHoneyAndDarlingGames,
    PoHMountainDeed,
    PoHTreasureChestGame,
    PoHIkanaGraveyard,
    PoHGrottoByGreatBay,
    PoHPirahna,
    PoHZoraCapeWaterfall,
    PoHPiratesFortress,
    PoHSeahorse,
    PoHIndigoGos,
    PoHOceanDeed,
    PoHBeaverRace,
    PoHSnowheadRoad,
    PoHPirateLagoon,
    PoHSkullHouseColorPuzzle,
    PoHStoryTimeFestival,
    PoHStoryTimeGiants,
    PoHIkanaDeed,
    PoHCouplesMaskPeace,
    PoHRoadToGoronVillageUnderwater,
    PoHDonGerosChoir,
    PoHFishermanIslandGame,
    PoHPoeGame,
    PoHIkanaCastlePillar,
    PoHUpstreamShrine,
    PoH5000RupeeBank,
    PoHMoon1,
    PoHMoon2,
    PoHMoon3,
    PoHMoon4,
    MapClockTown,
    MapRomaniRanch,
    MapWoodfall,
    MapSnowhead,
    MapGreatBay,
    MapIkana
]



     

