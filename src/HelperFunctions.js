import { Data, AnjuMeeting, CowsSaved, DeedQuestStarted, IkanaCleansed, KafeiTrust, LetterDelivered, OceanCleared, OperationSolMates, PendantDelivered, PriorityMailRecieved, RomaniFriended, RomaniStoneRemoved, ScarecrowSong, SpringTime, SwampCleared, BoatAccess, GrandmaSaved } from "./Data"
export let CycleNum = 0
export let numBottles = 0
export let TotalObjectivesCompleted = 0
export var UndoList = []

export class Time{
    constructor(StartTime, EndTime){
        this.StartTime = StartTime
        this.EndTime = EndTime
    }
    
}

export class Day{
    constructor(Day){
        this.Day = Day
    }
}





export function LoadList(options){
    let ShownList = []
      UpdatePossible()
      for(let i = 0; i < Data.length; i++){
          if(!Data[i].complete){
              if(Data[i].possible || Data[i].potential ){
                  ShownList.push(Data[i])
              }
          }
      }
      return ShownList
      
  }

export function ResetCycle() {
	BoatAccess.isActive = false;
	GrandmaSaved.isActive = false;
	RomaniFriended.isActive = false;
	SwampCleared.isActive = false;
	SpringTime.isActive = false;
	OceanCleared.isActive = false;
	IkanaCleansed.isActive = false;
	CowsSaved.isActive = false;
	DeedQuestStarted.isActive = false;
	RomaniStoneRemoved.isActive = false;
	ScarecrowSong.isActive = false;
	AnjuMeeting.isActive = false;
	LetterDelivered.isActive = false;
	KafeiTrust.isActive = false;
	PriorityMailRecieved.isActive = false;
	PendantDelivered.isActive = false;
	OperationSolMates.isActive = false;
	CycleNum++;
}

export function CompleteObjective(Objective) {

    
    let index = FindObjIndex(Objective.name)
    console.log(Data[index].complete)
    Data[index].complete = true;
    console.log(Data[index].complete)

    TotalObjectivesCompleted++;
    // if (IndexToComplete >= 22 && IndexToComplete <= 28) {
    //     numBottles++;
    // }
    UndoList.push(Objective)
}

export function UpdatePossible() {
	let isPossible = true
    let isPotential = true
	for (let i = 0; i < Data.length; ++i) {
		isPossible = true;
        isPotential = true
		
		if(Data[i].itemRecs != null) {               
		    for(let j = 0; j < Data[i].itemRecs.length; ++j){
		        if (!Data[i].itemRecs[j].complete) {
         			isPossible = false;
                    isPotential = false
        		}
            }    
        }               

		if (Data[i].gameState != null) {
			for (let j = 0; j < Data[i].gameState.length; ++j) {
				if (!Data[i].gameState[j].isActive) {
					isPossible = false;
				}
				if (Data[i].name === "POH Tingle/Deku King Picture" && SwampCleared.isActive) {
					isPossible = false;
				}
			}
		}

		if (numBottles < Data[i].bottles) {
			isPossible = false;
            isPotential = false
		}

		if (Data[i].cycleNum > CycleNum) {
			isPossible = false;
            isPotential = false
		}

			Data[i].possible = isPossible
        
            Data[i].potential = isPotential

	}
}

export function FindObj(name){
    
    for(var i = 0; name !== Data[i].name; i++){

    }
    return Data[i]
}

export function FindObjIndex(name){
    
    for(var i = 0; name !== Data[i].name; i++){

    }
    return Data[i].index
}