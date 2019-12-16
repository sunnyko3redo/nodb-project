const fighterList = [{
    id: 0,
    name: 'Khabib Nurmagomedov',
    record: '28-0',
    rank: 1,
    img: `http://secureservercdn.net/198.71.188.149/f29.bb2.myftpupload.com/wp-content/uploads/2015/12/knurmagomedov.png`

},
{
    id: 1,
    name: 'Tony Ferguson',
    record: '25-3',
    rank: 2,
    img: `http://secureservercdn.net/198.71.188.149/f29.bb2.myftpupload.com/wp-content/uploads/2015/12/tferguson.png`

},
{
    id: 2,
    name: 'Dustin Poirier',
    record: '25-6',
    rank: 3,
    img: `http://secureservercdn.net/198.71.188.149/f29.bb2.myftpupload.com/wp-content/uploads/2015/12/dpoirier.png`

},
{
    id: 3,
    name: 'Justin Gaethje',
    record: '21-2',
    rank: 4,
    img: `http://secureservercdn.net/198.71.188.149/f29.bb2.myftpupload.com/wp-content/uploads/2016/01/jgaethje.png`
},
{
    id: 4,
    name: 'Donald Cerrone',
    record: '35-13',
    rank: 5,
    img: `http://secureservercdn.net/198.71.188.149/f29.bb2.myftpupload.com/wp-content/uploads/2015/12/dcerrone.png`
},
{
    id: 5,
    name: 'Daniel Hooker',
    record: '19-8',
    rank: 6,
    img: `http://secureservercdn.net/198.71.188.149/f29.bb2.myftpupload.com/wp-content/uploads/2015/12/dhooker.png`
},
{
    id: 6,
    name: 'Al Iaquinta',
    record: '14-6-1',
    rank: 7,
    img: `http://secureservercdn.net/198.71.188.149/f29.bb2.myftpupload.com/wp-content/uploads/2015/12/aiaquinta.png`
},
{
    id: 7,
    name: 'Kevin Lee',
    record: '18-5',
    rank: 8,
    img: `http://secureservercdn.net/198.71.188.149/f29.bb2.myftpupload.com/wp-content/uploads/2015/12/klee.png`
},
{
    id: 8,
    name: 'Paul Fedler',
    record: '17-4',
    rank: 9,
    img: `http://secureservercdn.net/198.71.188.149/f29.bb2.myftpupload.com/wp-content/uploads/2015/12/pfelder.png`
},
{
    id: 9,
    name: 'Edson Barboza',
    record: '20-8',
    rank: 10,
    img: `http://secureservercdn.net/198.71.188.149/f29.bb2.myftpupload.com/wp-content/uploads/2015/12/ebarboza.png'`
}
]

let id = 10

module.exports = {
    
    getFighterList: (req, res) => {
        res.status(200).send(fighterList)
    },
    addFighter: (req, res) =>{
        const {newFighter} = req.body
        newFighter.id = id++
        newFighter.rank = 0
        fighterList.push(newFighter)
        res.status(200).send(fighterList)
    },
    updateFighter: (req, res) =>{
        const {updatedFighter} = req.body
        const editedFighter = {}
        // destructoring fighter from the body that is coming in.
        for(let key in updatedFighter){
            if(updatedFighter[key]) {
                editedFighter[key] = updatedFighter[key]
            }
        }

        const {id} = req.params
        // destructoring the id from the received params
        const index = fighterList.findIndex(el => el.id === +id)
        // this is destructoring the index of fighterList to "index"
        const updatedObj = {...fighterList[index], ...editedFighter}
        // this is updating fighterList @ the index discovered to updatedFighter
        fighterList[index] = updatedObj
        // this is saving the updatedObj to the object located at that index
        res.status(200).send(fighterList) 
        //this is sending back the updated fighter list.
    },
    deleteFighter: (req, res) => {
        const deleteFighter = req.params.id
        // destructoring to declare what we're going to work with saving it as deleteFighter
        const index = fighterList.findIndex(fighter => fighter.id === +deleteFighter)
        // destructoring an object to replace the new with.
        fighterList.splice(index, 1)
        res.status(200).send(fighterList)
    }
}