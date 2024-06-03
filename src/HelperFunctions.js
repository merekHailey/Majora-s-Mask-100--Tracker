import { Data, Gamestates, FindStateByName } from "./Data"
export var CycleNum = 0
export var numBottles = 0
export var TotalObjectivesCompleted = 0
export var UndoList = []
export var currentDay = "Day 1"






export function setCycleNum(num){
    CycleNum = num
}

export function setNumBottles(num){
    numBottles = num
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
	for(let state of Gamestates){
        state.isActive = false
    }
	CycleNum = 0;
}

// export function FindGamestateID(name){
//     for(let state of Gamestates){
//         if(state.name === name){
//             return state.id
//         }
        
//     }
//     return undefined
// }

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
				if (!FindStateByName(Data[i].gameState[j].name).isActive) {
					isPossible = false
				}
                if(Data[i].name === "Postman's Hat" && FindStateByName("Grandma Saved").isActive){
                    isPossible = false
                    isPotential = false
                }
                if(Data[i].name === "Couple's Mask" && FindStateByName("Grandma Saved").isActive){
                    isPossible = false
                    isPotential = false
                }
                if(Data[i].name === "All-Night Mask" && FindStateByName("Grandma Saved").isActive){
                    isPossible = false
                    isPotential = false
                }
				if (Data[i].name === "PoH: Tingle Picture" && FindStateByName("Swamp Cleared").isActive) {
					isPossible = false
                    isPotential = false
				}
			}
		}

		if (Data[i].bottles != null && numBottles < Data[i].bottles) {
			isPossible = false;
            isPotential = false
		}

		if (Data[i].cycleNum > CycleNum) {
			isPossible = false;
            isPotential = false
		}

        if(!isCorrectTime(Data[i].day)){
            isPossible = false
        }

			Data[i].possible = isPossible
        
            Data[i].potential = isPotential

	}
}

export function ChangeCurrentDay(day){
    currentDay = day
}

function isCorrectTime(day){
    if(day === null){
        return true
    }

    if(day === currentDay){
        return true
    }

    if(day === "Day" && currentDay === "Day 1"){
        return true
    }
    if(day === "Day" && currentDay === "Day 2"){
        return true
    }
    if(day === "Day" && currentDay === "Day 3"){
        return true
    }

    if(day === "Night" && currentDay === "Night 1"){
        return true
    }
    if(day === "Night" && currentDay === "Night 2"){
        return true
    }
    if(day === "Night" && currentDay === "Night 3"){
        return true
    }

    if(day === "Day 1 or Day 2" && currentDay === "Day 1"){
        return true
    }
    if(day === "Day 1 or Day 2" && currentDay === "Day 2"){
        return true
    }
    if(day === "Day 2 or Day 3" && currentDay === "Day 2"){
        return true
    }
    if(day === "Day 2 or Day 3" && currentDay === "Day 3"){
        return true
    }
    if(day === "Day 1 or Day 3" && currentDay === "Day 1"){
        return true
    }
    if(day === "Day 1 or Day 3" && currentDay === "Day 3"){
        return true
    }

    if(day === "Night 1 or Night 2" && currentDay === "Night 1"){
        return true
    }
    if(day === "Night 1 or Night 2" && currentDay === "Night 2"){
        return true
    }
    if(day === "Night 2 or Night 3" && currentDay === "Night 2"){
        return true
    }
    if(day === "Night 2 or Night 3" && currentDay === "Night 3"){
        return true
    }
    if(day === "Night 1 or Night 3" && currentDay === "Night 1"){
        return true
    }
    if(day === "Night 1 or Night 3" && currentDay === "Night 3"){
        return true
    }

    return false
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
        if(name === Data[i].name){
            return Data[i].index
        }
    }
    return undefined
}