import {Objective, Time, GameState, Day} from "./HelperFunctions"

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

export var Data = [
    new Objective("Song of Time", null, [DeedQuestStarted], null, 0, 0, 0, 0, 4, true, true),
]



     

