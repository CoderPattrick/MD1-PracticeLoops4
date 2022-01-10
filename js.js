bang = "<table border='1' cellspacing='0' width='300' cellpadding='3'>";
// for (let i = 1; i <11 ; i++) {
//     //phải mở tr, lặp việc mở và đóng td, rồi đóng tr
//    bang += "<tr>";
//     for (let j = 1; j < 11; j++) {
//        bang += "<td>"+ i*j +"</td>"
//     }
//     bang += "</tr>";
// }
// bang += "</table>";
// document.writeln(bang);
i=j=1;
while (i<11){
    bang += "<tr>";
    while (j<11){
        bang += "<td>" + i*j + "</td>";
        j++;
    }
    bang += "</tr>";
    j=1;
    i++;
}
bang += "</table>";
document.writeln(bang);