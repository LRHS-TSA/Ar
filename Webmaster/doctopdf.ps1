$documents_path = 'Content'


# This filter will find .doc as well as .docx documents
Get-ChildItem -File -Recurse -Path $documents_path -Filter *.doc? | ForEach-Object {	
	soffice --headless --convert-to htm:HTML -outdir $_.Directory $_.FullName | Out-Null
	$in = "Content\" + $_.Directory.Name + "\" + $_.BaseName + ".htm"
	$out = "Content\" + $_.Directory.Name + "\" + $_.BaseName + ".html"
	tidy -q -config tidy_options.conf -o $out $in
}