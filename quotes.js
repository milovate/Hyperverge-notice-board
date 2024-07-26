        async function getBreakingBadQuote() {
            const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
            const data = await response.json();
            return data[0];
        }

        async function updateContent() {
            try {
  
                const quote = await getBreakingBadQuote();
                document.getElementById('quote').textContent = `"${quote.quote}"`;
                document.getElementById('quoteAuthor').textContent = `- ${quote.author}`;
            } catch (error) {
                console.error('Error updating content:', error);
            }
        }

        // Update immediately and then every minute
        updateContent();
        setInterval(updateContent, 60000);