var i, j, o, prop;
for (i in Modernizr) {
    if (typeof(Modernizr[i]) == "boolean") {
        document.write("<tr class='" + Modernizr[i] + "'>");
        document.write("<td>" + i + "</td>");
        document.write("<td>" + Modernizr[i] + "</td>");
        document.write("</tr>");
    } else if (typeof(Modernizr[i]) == "object") {
        document.write("<tr class='" + Modernizr[i] + "'>");
        document.write("<td>" + i + "</td>");
        document.write("<td><table>");
        o = Modernizr[i];
        for (j in o) {
            document.write("<tr class='" + o[j] + "'>");
            document.write("<td>" + j + "</td>");
            if (o[j] == '') {
                prop = 'unknown';
            } else {
                prop = o[j];
            }
            document.write("<td>" + prop + "</td>");
            document.write("</tr>");
        }
        document.write("</table></td>");
        document.write("</tr>");
    }
}