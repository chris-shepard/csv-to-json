
function confirmCorrectFileType(csv) {
  return new Promise((resolve, reject) => {
    if (csv.name.substr(name.length - 3) === "csv") {
      resolve(csv);
    };
    reject(new Error(`You have uploaded the wrong file type: ${csv.name}`))
  })
}

function convertFile(f, toRemove) {
  if (f) {
    var r = new FileReader();
    r.onload = function (e) {
      let finalBatch=[];
      var contents = e.target.result;
      const lines = contents.split('\n');
      const headers = lines[0].split(',');
      headersToKeep = []
      headers.forEach((e, i) => {
        if (!toRemove.includes(e)) {
          headersToKeep.push(i);
        }
      });
      for (var i = 1; i < lines.length; i++) {
        let dataObject = {}
        let result = lines[i].split(",");
        result.forEach((e, i) => {
          if (headersToKeep.includes(i)) {
            let label = headers[i];
            dataObject[label]=e;
          }
        })
        finalBatch.push(dataObject);
      }
      var outputDOM = document.getElementById('output');
      outputDOM.innerHTML = JSON.stringify(finalBatch);
      console.log(finalBatch);
      return finalBatch;
      
    }
    /* for (var i = 0; i < lines.length; i++) {
         output.push("<tr><td>" + lines[i].split(",").join("</td><td>") + "</td></tr>");
       }
       output = "<table>" + output.join("") + "</table>";
       var outputDOM = document.getElementById('output');
       outputDOM.innerHTML = output;
     }*/
    r.readAsText(f);
  }
}



let form = document.getElementById("convertForm");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  var output = document.getElementById('output');
  output.innerHTML = "";

  var csvInput = document.getElementById('doc-input').files[0];
  console.log(csvInput);

  var toRemove = ["DOB", "Country", "Fax", "Pager", "Note", "Custom"];

  confirmCorrectFileType(csvInput)
    .then((res) => {
      convertFile(res, toRemove)
    })
    .catch((err) => {
      alert(err);
    })
})