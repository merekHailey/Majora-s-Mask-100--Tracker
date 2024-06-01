import { Data, AnjuMeeting, DeedQuestStarted, IkanaCleansed, KafeiTrust, LetterDelivered, OceanCleared, OperationSolMates, PendantDelivered, PriorityMailRecieved, RomaniFriended, RomaniStoneRemoved, ScarecrowSong, SpringTime, SwampCleared, BoatAccess, GrandmaSaved } from "./Data"
export let CycleNum = 0
export let numBottles = 0
export let TotalObjectivesCompleted = 0
export var UndoList = []


export class Time{
    constructor(startTime, endTime){
        this.startTime = startTime
        this.endTime = endTime
    }
    
}

export class Day{
    constructor(day){
        this.day = day
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
      ShownList.sort(ComparePriority)
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
    Data[index].complete = true;

    TotalObjectivesCompleted++;
    if (index >= 21 && index <= 26) {
        numBottles++;
    }
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
		        if (!FindObj(Data[i].itemRecs[j]).complete) {
         			isPossible = false;
                    isPotential = false
                    
        		}
            }    
        }               

		if (Data[i].gameState != null) {
			for (let j = 0; j < Data[i].gameState.length; ++j) {
				if (!Data[i].gameState[j].isActive) {
					isPossible = false
				}
                if(Data[i].name === "Postman's Hat" && GrandmaSaved.isActive){
                    isPossible = false
                    isPotential = false
                }
                if(Data[i].name === "Couple's Mask" && GrandmaSaved.isActive){
                    isPossible = false
                    isPotential = false
                }
                if(Data[i].name === "All-Night Mask" && GrandmaSaved.isActive){
                    isPossible = false
                    isPotential = false
                }
				if (Data[i].name === "PoH: Tingle Picture" && SwampCleared.isActive) {
					isPossible = false
                    isPotential = false
				}
			}
		}

		if (Data[i].bottles != null && numBottles < Data[i].bottles) {
			isPossible = false;
            isPotential = false
		}

		// if (Data[i].cycleNum > CycleNum) {
		// 	isPossible = false;
        //     isPotential = false
		// }

			Data[i].possible = isPossible
        
            Data[i].potential = isPotential

	}
}

function ComparePriority(a, b){
    if (a.priority < b.priority) {
        return -1;
    } else if (a.priority > b.priority) {
        return 1;
    }

    
    else if(a.timeRec != null && b.timeRec === null){
        return -1
    }
    else if(a.timeRec === null && b.timeRec != null){
        return 1
    }
    else
        return 0;
}

export function FindObj(name){
    
    for(var i = 0; i < Data.length; i++){
        if(name === Data[i].name){
            return Data[i]
        }
    }
    return undefined
}

export function FindObjIndex(name){
    
    
    for(var i = 0; i < Data.length; i++){
        console.log(Data[i])
        if(name === Data[i].name){
            return Data[i].index
        }
    }
    return undefined
}