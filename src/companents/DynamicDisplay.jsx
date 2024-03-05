import React from 'react';

const DynamicDisplay = () => {
     const cards = [
        { free:'free',
          price:'$0/MONTH',
          user:'single user',
          storage:'50GB storage',
          projects:'Unlimited public projects',
          access:'community accsess',
          privateproject:'Unlimited private project',
          support:'Dedicted phone support',
          status:'monthly status supports',
          button:'Button'    
          },
          {
            free:'plus',
          price:'$9/MONTH',
          user:'5 users',
          storage:'50GB storage',
          projects:'Unlimited public projects',
          access:'community accsess',
          privateproject:'Unlimited private project',
          support:'Dedicted phone support',
          status:'monthly status supports',
          button:'Button'
          },
          {
            free:'pro',
          price:'$49/MONTH',
          user:'Unlimited users',
          storage:'50GB storage',
          projects:'Unlimited public projects',
          access:'community accsess',
          privateproject:'Unlimited private project',
          support:'Dedicted phone support',
          status:'monthly status supports',
          button:'Button'
          }
          // Add more cards as needed
    ];

    return (
        <div className='heat'>
            {cards.map(card => (
                <div className='cards'>
                    <h5 >{card.free}</h5>
                    <h2>{card.price}</h2>
                    <hr />
                    <p>{card.user}</p>
                    <p>{card.storage}</p>
                    <p>{card.projects}</p>
                    <p>{card.access}</p>
                    <p>{card.privateproject}</p>
                    <p>{card.support}</p>
                    <p>{card.status}</p>
                    <hr />
                    <button>{card.button}</button>
                </div>
            ))}
        </div>
    
    );
};



export default DynamicDisplay;