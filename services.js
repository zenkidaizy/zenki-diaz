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
const blogPostRushed = document.getElementById('blog-post-rushed');
const blogPostMonthlySubscription = document.getElementById('blog-post-monthly-subscription');

// Set Blog Post Price
function setBlogPostPrice() {
    const blogPostPrice = document.getElementById('blog-post-price');
    const blogPostTAT = document.getElementById('blog-post-tat');

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
                blogPostTAT.innerText = 'Turnaround time: 4 days';
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
                blogPostTAT.innerText = 'Turnaround time: 5 days';
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
                blogPostTAT.innerText = 'Turnaround time: 6 days';
            } else {
                blogPostPrice.innerText = '$429';
                blogPostTAT.innerText = 'Turnaround time: 2 days';
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

/*===== Pricing: Emails =====*/

// Emails Pricing Select Elements:
const numOfEmails = document.getElementById('emails-number');
const emailsRushed = document.getElementById('emails-rushed');

// Set Emails Price
function setEmailsPrice() {
    const emailsPrice = document.getElementById('emails-price');
    const emailsTAT = document.getElementById('emails-tat');

    if (numOfEmails.value === '3') {
        if (emailsRushed.value === 'no') {
            emailsPrice.innerText = '$59';
            emailsTAT.innerText = 'Turnaround Time: 3 Days';
        } else {
            emailsPrice.innerText = '$89';
            emailsTAT.innerText = 'Turnaround Time: 1 Day';
        }
    } else if (numOfEmails.value === '5') {
        if (emailsRushed.value === 'no') {
            emailsPrice.innerText = '$99';
            emailsTAT.innerText = 'Turnaround Time: 4 Days';
        } else {
            emailsPrice.innerText = '$139';
            emailsTAT.innerText = 'Turnaround Time: 1 Day';
        }
    } else if (numOfEmails.value === '10') {
        if (emailsRushed.value === 'no') {
            emailsPrice.innerText = '$199';
            emailsTAT.innerText = 'Turnaround Time: 5 Days';
        } else {
            emailsPrice.innerText = '$249';
            emailsTAT.innerText = 'Turnaround Time: 2 Days';
        }
    }
}

// Event Listeners
numOfEmails.addEventListener('change', setEmailsPrice);

emailsRushed.addEventListener('change', setEmailsPrice);

/*===== Pricing: Product Description =====*/

// Product Description Pricing Select Elements:
const numOfDesc = document.getElementById('product-desc-number');
const productDescRushed = document.getElementById('product-desc-rushed');

// Set Product Description Price
function setProductDescPrice() {
    const productDescPrice = document.getElementById('product-desc-price');
    const productDescTAT = document.getElementById('product-desc-tat');

    if (numOfDesc.value === '1') {
        if (productDescRushed.value === 'no') {
            productDescPrice.innerText = '$99';
            productDescTAT.innerText = 'Turnaround Time: 3 Days';
        } else {
            productDescPrice.innerText = '$129';
            productDescTAT.innerText = 'Turnaround Time: 1 Day';
        }
    } else if (numOfDesc.value === '5') {
        if (productDescRushed.value === 'no') {
            productDescPrice.innerText = '$159';
            productDescTAT.innerText = 'Turnaround Time: 4 Days';
        } else {
            productDescPrice.innerText = '$199';
            productDescTAT.innerText = 'Turnaround Time: 1 Day';
        }
    } else if (numOfDesc.value === '10') {
        if (productDescRushed.value === 'no') {
            productDescPrice.innerText = '$249';
            productDescTAT.innerText = 'Turnaround Time: 5 Days';
        } else {
            productDescPrice.innerText = '$299';
            productDescTAT.innerText = 'Turnaround Time: 2 Days';
        }
    }
}

// Event Listeners
numOfDesc.addEventListener('change', setProductDescPrice);

productDescRushed.addEventListener('change', setProductDescPrice);

/*===== Pricing: Sales Copy =====*/

// Sales Copy Pricing Select Elements:
const copyWordCount = document.getElementById('sales-copy-word-count');
const copyRushed = document.getElementById('sales-copy-rushed');

// Set Sales Copy Price
function setCopyPrice() {
    const copyPrice = document.getElementById('sales-copy-price');
    const copyTAT = document.getElementById('sales-copy-tat');

    if (copyWordCount.value === '300') {
        if (copyRushed.value === 'no') {
            copyPrice.innerText = '$340';
            copyTAT.innerText = 'Turnaround Time: 1 Week';
        } else {
            copyPrice.innerText = '$400';
            copyTAT.innerText = 'Turnaround Time: 3 Days';
        }
    } else if (copyWordCount.value === '500') {
        if (copyRushed.value === 'no') {
            copyPrice.innerText = '$520';
            copyTAT.innerText = 'Turnaround Time: 10 Days';
        } else {
            copyPrice.innerText = '$600';
            copyTAT.innerText = 'Turnaround Time: 4 Days';
        }
    } else if (copyWordCount.value === '1000') {
        if (copyRushed.value === 'no') {
            copyPrice.innerText = '$1020';
            copyTAT.innerText = 'Turnaround Time: 2 Weeks';
        } else {
            copyPrice.innerText = '$1120';
            copyTAT.innerText = 'Turnaround Time: 5 Days';
        }
    }
}

// Event Listeners
copyWordCount.addEventListener('change', setCopyPrice);

copyRushed.addEventListener('change', setCopyPrice);