// Simulate a download process based on an array of file names and sizes.
function download(arr) {

}
download([
    { fileName: 'JavaScript Chapter I.pdf', fileSize: 400 },
    { fileName: 'JavaScript Chapter II.pdf', fileSize: 300 },
    { fileName: 'React-Native Basics.pdf', fileSize: 500 }
])
/* Expected output:
Downloading 3 files initialized.
[1/3] JavaScript Chapter I.pdf downloading ... *immediately*
[2/3] JavaScript Chapter II.pdf downloading ... *after some time*
[3/3] React-Native Basics.pdf downloading ... *after some time*
Downloaded 3 out of 3 files!
*/
