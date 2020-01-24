// promise practice exercise //

// const waitForMe = (num) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (num %2 === 0) {
//                 resolve();
//             } if (num %5 === 0) {
//                 resolve();
//             } else {
//                 reject()
//             }
//         }, num);
//     });
// }
//
// waitForMe(2000).then(() => console.log('2 seconds have passed'));
// waitForMe(3000).then(() => console.log('3 seconds have passed'));
// waitForMe(9000).then(() => console.log('9 seconds have passed'));

$(document).ready(function () {
    function pageLoad() {
        $.ajax('data/blog.json')

            .done(function (data) {
                for (let i = 0; i < data.length; i++) {
                    console.log(data);
                    $('#posts').append(
                        "<h1></h1>" + data[i].title +
                        "<p></p>" + data[i].content +
                        "<p></p>" + data[i].categories +
                        "<p></p>" + data[i].date
                    )

                }

            })
    }
    pageLoad()
    $(#refresh)
})
