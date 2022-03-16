function renderPage() {

let stuff = {
  title: 'Simpel IWP Demo',
  heading: 'IWP demo',
  demoString: 'JS script er kørt'
};
let {title, heading, demoString} = stuff;

let HTMLStuff = `<!DOCTYPE html>
<html lang="da">
  <head>
    <meta charset="utf-8">
    <title>${title}</title>
  </head>
  <body>
    <!-- page content -->
    <h1> ${heading} </h1>
    <script>
      console.log("${demoString}");
    </script>
  </body>
</html>`;

console.log(HTMLStuff);

}

















// <!DOCTYPE html>
// <html lang="da">
//   <head>
//     <meta charset="utf-8">
//     <title>Simpel IWP Demo</title>
//   </head>
//   <body>
//     <!-- page content -->
//     <h1> IWP demo </h1>
//     <script>
//       console.log("JS Script er kørt");
//     </script>
//   </body>
// </html>
