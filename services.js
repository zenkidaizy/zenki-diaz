// Hamburger Menu

const navBar = document.querySelector('nav');
const navMenu = document.querySelector('.hamburger-menu');

navMenu.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navBar.classList.toggle('active');
});

/*===== Pricing: Blog Posts =====*/

// Blog Post Pricing Select Elements:
const blogPostWordCount = document.getElementById('blog-post-word-count');
const blogPostTAT = document.getElementById('blog-post-tat');
const blogPostRushed = document.getElementById('blog-post-rushed');
const blogPostMonthlySubscription = document.getElementById('blog-post-monthly-subscription');

// Set Blog Post Price
function setBlogPostPrice() {
    const blogPostPrice = document.getElementById('blog-post-price');

    if (blogPostWordCount.value === '500') {
        if (blogPostMonthlySubscription.value === 'no') {
            if (blogPostRushed.value === 'no') {
                blogPostPrice.innerText = '$99';
                blogPostTAT.innerText = 'Turnaround time: 3 days';
            } else {
                blogPostPrice.innerText = '$129';
                blogPostTAT.innerText = 'Turnaround time: 1 day';
            }
        } else if (blogPostMonthlySubscription.value === '4') {
            blogPostPrice.innerText = '$316 (Save 20%)';
            blogPostTAT.innerText = 'Turnaround time: 1 per week';
        } else if (blogPostMonthlySubscription.value === '8') {
            blogPostPrice.innerText = '$632 (Save 20%)';
            blogPostTAT.innerText = 'Turnaround time: 2 per week';
        }
    } else if (blogPostWordCount.value === '1000') {
        if (blogPostMonthlySubscription.value === 'no') {
            if (blogPostRushed.value === 'no') {
                blogPostPrice.innerText = '$179';
                blogPostTAT.innerText = 'Turnaround time: 3 days';
            } else {
                blogPostPrice.innerText = '$219';
                blogPostTAT.innerText = 'Turnaround time: 1 day';
            }
        } else if (blogPostMonthlySubscription.value === '4') {
            blogPostPrice.innerText = '$576 (Save 20%)';
            blogPostTAT.innerText = 'Turnaround time: 1 per week';
        } else if (blogPostMonthlySubscription.value === '8') {
            blogPostPrice.innerText = '$1152 (Save 20%)';
            blogPostTAT.innerText = 'Turnaround time: 2 per week';
        }
    } else if (blogPostWordCount.value === '1500') {
        if (blogPostMonthlySubscription.value === 'no') {
            if (blogPostRushed.value === 'no') {
                blogPostPrice.innerText = '$279';
                blogPostTAT.innerText = 'Turnaround time: 3 days';
            } else {
                blogPostPrice.innerText = '$329';
                blogPostTAT.innerText = 'Turnaround time: 1 day';
            }
        } else if (blogPostMonthlySubscription.value === '4') {
            blogPostPrice.innerText = '$896 (Save 20%)';
            blogPostTAT.innerText = 'Turnaround time: 1 per week';
        } else if (blogPostMonthlySubscription.value === '8') {
            blogPostPrice.innerText = '$1792 (Save 20%)';
            blogPostTAT.innerText = 'Turnaround time: 2 per week';
        }
    } else if (blogPostWordCount.value === '2000') {
        if (blogPostMonthlySubscription.value === 'no') {
            if (blogPostRushed.value === 'no') {
                blogPostPrice.innerText = '$379';
                blogPostTAT.innerText = 'Turnaround time: 3 days';
            } else {
                blogPostPrice.innerText = '$429';
                blogPostTAT.innerText = 'Turnaround time: 1 day';
            }
        } else if (blogPostMonthlySubscription.value === '4') {
            blogPostPrice.innerText = '$1216 (Save 20%)';
            blogPostTAT.innerText = 'Turnaround time: 1 per week';
        } else if (blogPostMonthlySubscription.value === '8') {
            blogPostPrice.innerText = '$2432 (Save 20%)';
            blogPostTAT.innerText = 'Turnaround time: 2 per week';
        }
    }
}

// Event Listeners
blogPostWordCount.addEventListener('change', setBlogPostPrice);

blogPostRushed.addEventListener('change', setBlogPostPrice);

blogPostMonthlySubscription.addEventListener('change', setBlogPostPrice);