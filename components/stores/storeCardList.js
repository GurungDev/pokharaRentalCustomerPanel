import React from 'react'
import StoreCard from './storeCard'

const StoreCardList = () => {
  return ( 
    <div className="grid gap-5 overflow-y-scroll h-[60vh] py-3 px-2">
        <StoreCard
          number={1}
          name={"Store no 1"}
          location={"Parsyang 5, pokhara"}
          ratings={4.7}
          distance={40}
        />
        <StoreCard
          number={2}
          name={"Store no 1"}
          location={"Parsyang 5, pokhara"}
          ratings={4.7}
          distance={40}
        />
        <StoreCard
          number={3}
          name={"Store no 1"}
          location={"Parsyang 5, pokhara"}
          ratings={4.7}
          distance={40}
        />
        <StoreCard
          number={4}
          name={"Store no 1"}
          location={"Parsyang 5, pokhara"}
          ratings={4.7}
          distance={40}
        />
        <StoreCard
          number={5}
          name={"Store no 1"}
          location={"Parsyang 5, pokhara"}
          ratings={4.7}
          distance={40}
        />
        <StoreCard
          number={6}
          name={"Store no 1"}
          location={"Parsyang 5, pokhara"}
          ratings={4.7}
          distance={40}
        />
        <StoreCard
          number={7}
          name={"Store no 1"}
          location={"Parsyang 5, pokhara"}
          ratings={4.7}
          distance={40}
        />
      </div>
  )
}

export default StoreCardList