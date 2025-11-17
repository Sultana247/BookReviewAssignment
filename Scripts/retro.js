const loadBooks =async () =>{

    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    
    const books = data.posts;
    console.log(books);
    displaybooks(books);
}
loadBooks();

const searchBooks = async(searchInputText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchInputText}`);
    const data = await res.json();
    
    const books = data.posts;
    console.log(books);
    displaybooks(books);

}

const handleSearch = ()=>{
    const searchInput = document.getElementById('searchInput');
    const searchInputText = searchInput.value;
    
    searchBooks(searchInputText)
    console.log(searchInputText)
}

const displaybooks =(books)=>{
    const bookContainer = document.getElementById('booksContainer');
    bookContainer.innerHTML='';
        
    books.forEach(book => {
        
        
        const bookCard = document.createElement('div');
        bookCard.classList.add('bg-[#F3F3F5]', 'flex', 'h-[380px]', 'md:h-[320px]', 'lg:h-[270px]', 'p-7', 'lg:p-[40px]', 'md:gap-4', 'lg:gap-6', 'rounded-3xl');
        bookCard.innerHTML=`
             <!-- profile -->
                        <div class="bg-white w-12 h-9 md:w-16 md:h-14 lg:w-[72px] lg:h-[72px] rounded-xl lg:rounded-2xl">
                            <div class="rounded-full bg-green-600 relative w-[10px] h-[10px] lg:w-[18px] top-[-2px] right-[-13px] md:top-[-2px] md:right-[-30px] lg:h-[18px] lg:top-[-8px] lg:right-[-60px]"></div>

                        </div>
                        <!-- description -->
                        <div>
                           <!-- category and name of author -->
                            <div class="font-medium text-[14px] text-[#12132DCC] flex gap-5">
                                 <p># ${book.category}</p>
                                 <p>Author : ${book.author.name}</p>
                            </div>
                            <h4 class="text-xl font-bold mt-3">${book.title}</h4>
                            <p class="mt-4 text-[#12132D99] text-[16px]">${book.description}</p>
                            <!-- divider -->
                            <div class="border-dashed border-[#12132D40] mt-5 border-1 max-w-[576px]"></div>
                            <!-- reads or comments -->
                            <div class="flex justify-between mt-5">
                                <div class="flex gap-6">
                                    <div class="flex gap-3 text-[#12132D99] items-center">
                                        <i class="fa-regular fa-message"></i>
                                        <p class="text-[16px]">560</p>
                                    </div>
                                    <div class="flex gap-3 text-[#12132D99] items-center">
                                        <i class="fa-regular fa-eye"></i>
                                        <p class="text-[16px]">1,568</p>
                                    </div>
                                    <div class="flex gap-3 text-[#12132D99] items-center">
                                        <i class="fa-regular fa-clock"></i>
                                        <p class="text-[16px]">5 min</p>
                                    </div>
                                </div>
                                <button class=" bg-[#10B981] rounded-full p-[2px]"><i class="fa-regular fa-envelope-open " style="color:white"></i></button>
                            </div>
                        </div>
                    </div>
        `
        bookContainer.appendChild(bookCard);
    });
}
