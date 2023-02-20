import React, { useState } from "react"
import { UserDetailsComponent } from "./UserDetailsComponent"

let selectRankFrom = ""
let selectRankTo = ""


export function Home() {
    const [dropdownOptionFromState, setDropdownOptionFromState] = useState("")
    const [dropdownOptionToState, setDropdownOptionToState] = useState("")
    function getSelectRankFrom(rank) {
        selectRankFrom = rank
        console.log(rank)
    }

    function getSelectRankTo(rank) {
        selectRankTo = rank
        console.log(rank)
    }

    const rankSelectFromBlock = (
        <div className="select-from col-md-9">
            <button onClick={() => getSelectRankFrom("Iron")}>Iron</button>
            <button onClick={() => getSelectRankFrom("Bronze")}>Bronze</button>
            <button onClick={() => getSelectRankFrom("Silver")}>Silver</button>
            <button onClick={() => getSelectRankFrom("Gold")}>Gold</button>
            <button onClick={() => getSelectRankFrom("Platinum") }>Platinum</button>
            <button onClick={() => getSelectRankFrom("Diamond") }>Diamond</button>
            <button onClick={() => getSelectRankFrom("Master") }>Master</button>
            <button onClick={() => getSelectRankFrom("Grandmaster")}>Grandmaster</button>
            <div>
                <select onChange={(e) => { let selectedRank = e.target.value; setDropdownOptionFromState(selectedRank) }}>
                    <option value="0">Nothing selected</option>
                    <option value="4">IV</option>
                    <option value="3">III</option>
                    <option value="2">II</option>
                    <option value="1">I</option>
                </select>
            </div>
        </div>
        
    )
    const rankSelectToBlock = (
        <div className="select-to col-md-9">
            <button onClick={() => getSelectRankTo("Iron") }>Iron</button>
            <button onClick={() => getSelectRankTo("Bronze") }>Bronze</button>
            <button onClick={() => getSelectRankTo("Silver") }>Silver</button>
            <button onClick={() => getSelectRankTo("Gold") }>Gold</button>
            <button onClick={() => getSelectRankTo("Platinum") }>Platinum</button>
            <button onClick={() => getSelectRankTo("Diamond") }>Diamond</button>
            <button onClick={() => getSelectRankTo("Master") }>Master</button>
            <button onClick={() => getSelectRankTo("Grandmaster")}>Grandmaster</button>
            <div>
                <select onChange={(e) => { let selectedRank = e.target.value; setDropdownOptionToState(selectedRank) }}>
                    <option value="0">Nothing selected</option>
                    <option value="4">IV</option>
                    <option value="3">III</option>
                    <option value="2">II</option>
                    <option value="1">I</option>
                </select>
            </div>
        </div>
        
    )

    const rankSelectionBlock = (
        <div className="rank-selection-block">
            {rankSelectFromBlock}
            {rankSelectToBlock}
        </div>
        )

    if (dropdownOptionFromState && dropdownOptionToState && selectRankFrom && selectRankTo) {
        return (
            <div className="home-page-content">
                <div className="title-content">
                    <h1>Boost your rank with FakeBoy!</h1>
                </div>

                <div className="order-details">
                    {rankSelectionBlock}
                    <div className="selectionResultBlock">
                        <p>From {selectRankFrom} {dropdownOptionFromState} To {selectRankTo} {dropdownOptionToState}</p>
                    </div>
                    {UserDetailsComponent()}
                </div>
            </div>
        )
    } else {
        return (
            <div className="home-page-content">
                <div className="title-content">
                    <h1>Boost your rank with FakeBoy!</h1>
                </div>
                <div className="order-details">
                    {rankSelectionBlock}
                    {UserDetailsComponent()}
                </div>
            </div>
            )
    }
}