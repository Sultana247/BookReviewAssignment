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
    
    
    displaybooks(books);
    
    
    

}

const handleSearch = ()=>{
    const searchInput = document.getElementById('searchInput');
    const searchInputText = searchInput.value;
    searchBooks(searchInputText);
    loadSpinar(true);  
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
                                <button onclick='readThebook("${book.title}")' id="bookDetails" class=" bg-[#10B981] rounded-full p-[2px]"><i class="fa-regular fa-envelope-open " style="color:white"></i></button>
                            </div>
                        </div>
                    </div>
        `
        
        bookContainer.appendChild(bookCard);
        loadSpinar(false);
        
    });
}

// load the spinner for 2 sec
const loadSpinar = (isLoading)=>{
    console.log(isLoading);
    setInterval(2000);
    const spinner = document.getElementById('spinner');
    if(isLoading){
        spinner.classList.remove('hidden');

    }
    else{
        setTimeout(() => {
            spinner.classList.add('hidden');
        }, 2000);
    }
   

}

// books read done and count
const readThebook =(bookTitle)=>{
   
console.log(bookTitle);
const getCountElement = document.getElementById('countread');
const getCountText = getCountElement.innerText;
const getCount = parseInt(getCountText);
console.log(getCount);
const count = getCount + 1;
setElement('countread', count);
console.log(count);
const bookTitleContainer = document.getElementById('bookTitleContainer');
const titleCard = document.createElement('div');
titleCard.classList.add('flex', 'gap-2', 'bg-white', 'rounded-2xl', 'p-4');
titleCard.innerHTML=`
    <p class="text-[#12132D] font-semibold text-[14px]">${bookTitle}</p>
    <div class="flex gap-3 text-[#12132D99] items-center">
        <i class="fa-regular fa-eye"></i>
        <p class="text-[14px]">1,568</p>
     </div>
`;
bookTitleContainer.appendChild(titleCard);



}

// set element by id
const setElement=(id, value)=>{
    const getid = document.getElementById(id);
    console.log(getid);
    getid.innerText = value;
}

const loadLatestPost =async ()=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    
    const data = await res.json();
    
    const books = data;
    console.log(books);
    // display latest posts
    const latestPostContainer = document.getElementById('latestPostContainer');
    books.forEach(book => {
        console.log(book);
        const latestpostcard = document.createElement('div');
    latestpostcard.classList.add('card', 'bg-base-100',  'shadow-sm', 'p-6', 'rounded-3xl');
    latestpostcard.innerHTML = `
                        <figure>
                            <img
                            src="${book.cover_image}"
                            alt="Shoes" class="rounded-[20px]"/>
                        </figure>
                        <div class=" ">
                            <div class="flex text-[#12132D99] text-[16px] justify-start items-center mt-6">
                                <i class="fa-regular fa-calendar"></i>
                                <p>${book?.author?.posted_date || 'No posted date mentioned'}</p>
                            </div>
                            <h4 class="font-extrabold text-lg mt-[12px]">${book.title}</h4>
                            <p class="text-[#12132D99] text-[16px] mt-[12px]">${book.description}</p>
                            <!-- avatar -->
                             <div class="flex mt-4 gap-4">
                                <div class="avatar">
                                    <div class="w-[44px] rounded-full">
                                        <img src="${book.profile_image}" />
                                    </div>
                                </div>
                                <div class="">
                                    <p class="text-[16px] font-bold">${book?.author?.name || 'No name Posted'}</p>
                                    <p class="text-[#12132D99] text-[14px]">${book?.author?.designation || 'No designation mentioned'}</p>
                                </div>
                            </div>
                        </div>
    `;
    latestPostContainer.appendChild(latestpostcard);
    });
}
loadLatestPost();