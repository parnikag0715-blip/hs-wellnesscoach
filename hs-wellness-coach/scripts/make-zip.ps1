$sourceDir = "c:\Users\Kishore\OneDrive\Desktop\hs-wellness-coach\hs-wellness-coach"
$zipPath = "c:\Users\Kishore\OneDrive\Desktop\hs-wellness-coach\hs-wellness-coach.zip"

if (Test-Path $zipPath) {
    Remove-Item $zipPath -Force
}

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$zip = [System.IO.Compression.ZipFile]::Open($zipPath, [System.IO.Compression.ZipArchiveMode]::Create)

$allFiles = Get-ChildItem -Path $sourceDir -Recurse -File

$count = 0
foreach ($f in $allFiles) {
    $full = $f.FullName
    if ($full -match '[\\/]node_modules([\\/]|$)' -or $full -match '[\\/]\.next([\\/]|$)' -or $full -match '[\\/]\.git([\\/]|$)' -or $full -match '[\\/]\.turbo([\\/]|$)' -or $full -match '[\\/]\.vercel([\\/]|$)') {
        continue
    }
    $rel = $full.Substring($sourceDir.Length + 1).Replace('\', '/')
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $full, $rel, [System.IO.Compression.CompressionLevel]::Optimal)
    $count++
}

$zip.Dispose()
Write-Host "Zipped $count files to $zipPath"
$item = Get-Item $zipPath
Write-Host ("Size: {0:N2} MB" -f ($item.Length / 1MB))
