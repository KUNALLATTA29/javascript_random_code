let dat = (arr, ...arg) => [
    ...arr,
    ...arg.map((ele) => {
        return ele*2;
    })
]
dat([1,2,3], 4,4);