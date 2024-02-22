


export class GameState{
    constructor(name){
        this.name = name
        this.isActive = false
    }
}

export class Objective{

    constructor(index, name, timeRec, gameState, itemRecs, bottles, cost, estTime, cycleNum, priority, notes){
        this.index = index
        this.name = name
        this.timeRec = timeRec
        this.gameState = gameState
        this.itemRecs = itemRecs
        this.bottles = bottles
        this.cost = cost
        this.estTime = estTime
        this.cycleNum = cycleNum
        this.priority = priority
        this.possible = false
        this.potential = false
        this.complete = false
        this.notes = notes
    }
}

export var BoatAccess = new GameState("Boat Access")
export var GrandmaSaved = new GameState("Grandma Saved")
export var RomaniFriended = new GameState("Romani Friended")
export var SwampCleared = new GameState("Swamp Cleared")  
export var SpringTime = new GameState("Spring Time") 
export var OceanCleared = new GameState("Ocean Cleared")  
export var IkanaCleansed = new GameState("Ikana Cleansed")  
export var CowsSaved = new GameState("Cows Saved") 
export var DeedQuestStarted = new GameState("Deed Quest Started")  
export var RomaniStoneRemoved = new GameState("Romani Stone Removed")  
export var ScarecrowSong = new GameState("Scarecrow Song") 
export var AnjuMeeting = new GameState("Anju Meeting") 
export var LetterDelivered = new GameState("Letter Delivered") 
export var KafeiTrust = new GameState("Kafei Trust") 
export var PriorityMailRecieved = new GameState("Priority Mail Recieved") 
export var PendantDelivered = new GameState("Pendant Delivered") 
export var OperationSolMates = new GameState("Operation Sol Mates")

var Magic = new Objective(0, "Magic", null, null, null, 0, 0, 5, 0, 1)
var OcarinaOfTime = new Objective(1, "Ocarina of Time", null, null, [Magic], 0, 0, 0, 0, 5)
var DekuMask = new Objective(2, "Deku Mask", null, null, [OcarinaOfTime], 0, 0, 0, 1, 1)
var SongOfTime = new Objective(3, "Song of Time", null, [DeedQuestStarted], [OcarinaOfTime], 0, 0, 0, 0, 4)
var SongOfHealing = new Objective(4, "Song of Healing",null , null, [SongOfTime, OcarinaOfTime], 0, 0, 0, 0, 4)
var SongOfSoaring = new Objective(5, "Song of Soaring", null , [BoatAccess], [OcarinaOfTime], 0, 0, 0, 1, 4)
var SongOfAwakening = new Objective(6, "Song of Awakening", null , [BoatAccess], [OcarinaOfTime, DekuMask], 0, 0, 180, 1, 2)

export var Data = [
    Magic,
    OcarinaOfTime,
    DekuMask,
    SongOfTime,
    SongOfHealing,
    SongOfSoaring,
    SongOfAwakening
]



     

