<!doctype html>
<html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="css/styles.css">
    </head>
        
    <body>
       <main>
            <!-- Left Content -->
            <section class="main-content">
                <!-- Main Article -->
            <article>
                <!-- Main Title -->
        <header class="main-title">
            <h1>Calculator BMI</h1>
            <p>Create By SatuSehat.co.id</p>
            </header>
                <p class="isi-article">
                   Kalkulator BMI (Body Mass Index) digunakan untuk menghitung indeks massa 
                   tubuh seseorang. Ini adalah cara standar untuk menentukan apakah berat 
                   badan seseorang berada dalamrentang yang sehat  berdasarkan tinggi badan,
                   berat badan dan usia.
                </p>
            </article>

            <!-- Form-->
            <section>
                <form>
                   <div>
                    <label for="gender">Jenis Kelamin</label><br>
                    <select id="gender">
                        <option value="male">Pria</option>
                        <option value="female">Wanita</option>
                    </select>
                   </div>
                   <div>
                    <label for="inputberatbadan">Berat Badan (kg)</label><br>
                    <input type="number" id="inputberatbadan" name="inputberatbadan" reuired><br><br>
                   </div>
                   <div>
                    <label for="inputusia">Usia (th)</label><br>
                    <input type="number" id="inputusia" name="inputusia" reuired><br><br>
                   </div>
                   <div>
                    <label for="inputtinggibadan">Tinggi Badan (cm)</label><br>
                    <input type="number" id="inputtinggibadan" name="inputtinggibadan" reuired><br><br>
                   </div>
                   <div>
                    <button type="submit">Submit BMI</button>
                    <button type="reset">Reset</button>
                   </div>
                </form>
            </section>

            <!-- Form Article -->
            <setion>             
                <header>
                    <h2>Keunggulan Fitur</h2>
                </header>
                <article>
                    <P class="isi-article">
                        BMI dapat memberikan gambaran kasar tentang status berat 
                        badan seseorang, tetapi tidak mempertimbangkan komposisi tubuh seperti lemak 
                        tubuh dan otot, yang juga penting untuk kesehatan secara keseluruhan.
                    </P>
                </article>
            </setion> 
            </section>

            <!-- Right Content -->
            <section class="main-content">
                <!-- Result Article -->
                <article>
                    <header>
                        <h1>Result BMI</h1>
                    </header>

                    <!-- Result Content -->
                    <section class="result-section">
                        <div>
                            <h2>Result</h2>
                            <p id="Result">Hasil Result Adalah :</p>
                            <p id="bmiValue">Nilai BMI : 18.5</p>
                            <p id="Message">Keterangan : Anda Memiliki Berat Badan Normal/p>
                        </div>
                    </section>
                    
                    <!-- General informatin -->
                    <article>
                        <p> 
                            Untuk konsultasi lebih lanjut dapat hubungi dokter kami :
                        </p>    
                    </article>
                     <div>
                        <p class="keterangan">Dokter  : Dr. Ilham Yahya Mulyana </p>
                       
                     </div>
                     <div>
                        <p class="keterangan">Email   : ilhamyahyamulyana25@gmail.com</p>
                     </div>
                     <div>
                        <p class="keterangan">No. HP  : 0895-3582-58247</p>
                     </div>
                 </article>
                 <div class="container">
                    <h3>Download Aplikasi</h3>
                    <div class="app-buttons">
                        <a href="https://play.google.com/store/games" target="_blank" class="app-button google-play">
                            <img src="https://play.google.com/store/games" alt="Google Play">
                        </a>
                        <a href="https://play.google.com/store/games" target="_blank" class="app-button app-store">
                            <img src="https://play.google.com/store/games" alt="App Store">
                        </a>
                    </div>
                </div>
            </section>
       </main>
       <script src="script.js"></script>
    </body>
</html>
