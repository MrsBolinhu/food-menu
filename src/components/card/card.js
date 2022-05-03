import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
      <>
        <div class="mb-2 p-4 w-full h-[140px] rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.25)]">
          <div class="w-1/3 h-full rounded-lg bg-gray-300">

          </div>

          <div class="grid justify-items-end mr-2">
            <div class="mt-[-10px] flex items-center w-[100px] h-[50px] rounded-r-lg rounded-bl-lg bg-gray-500">
              <p class="m-auto text-center">Price</p>
            </div>
          </div>
        </div>


      </>
    )
  }
}

export default Card