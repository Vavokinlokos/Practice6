let Document = {
    Header: "",
    Body: "",
    Footer: "",
    Date: new Date('April 19, 2022 20:48:00'),
    Attachment: {
        Title: "",
        Body: "",
        Footer: "",
        Date: new Date('April 19, 2022 20:48:00'),
    }
}

function setDocHeader(value){
    Document.Header = value; 
}
function setDocBody(value){
    Document.Body = value; 
}
function setDocFooter(value){
    Document.Footer = value; 
}
function setDocDate(value){
    Document.Date = value; 
}
function setAttachment(t, b, f, d){
    Document.Attachment.Title = t;
    Document.Attachment.Body = b;
    Document.Attachment.Footer = f;
    Document.Attachment.Date = d; 
}

function mainCreation(){
    body = document.getElementsByTagName("body");
    let h = document.createElement("header");
    setDocHeader("It's header!")
    h.innerHTML = Document.Header;
    document.body.appendChild(h);
    let m = document.createElement("main");
    setDocBody("It's main part.")
    m.innerHTML = Document.Body;

    let a = document.createElement("div");
    setAttachment("Title of attachment.", "Main part of attachment", "Footer of attachment", new Date('April 19, 2022 20:49:00'))
    a.innerHTML = Document.Attachment.Title +"<br>"+ Document.Attachment.Body+"<br>"+Document.Attachment.Footer + "<br>"+Document.Attachment.Date;
    a.style.background = "lightgreen"
    a.style.width = "250px"
    m.appendChild(a);

    document.body.appendChild(m);
    let f = document.createElement("footer");
    setDocFooter("It's footer.")
    f.innerHTML = Document.Footer +"<br>"+ Document.Date;
    document.body.appendChild(f);
    

}