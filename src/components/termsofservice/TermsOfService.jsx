import React, { useEffect, useState } from "react";
import { Divider, Box, Grid, Button, Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import Faq from "react-faq-component";
import "./TermsOfService.css";

const TermsOfService = () => {  
    var link = <a href={('/contact')} style={{ color: "blue" }}>contact us</a>;
    return(
        <div className='mgaboutheight'>
            <Typography className='headingaboutus' variant="h4" gutterBottom component="div">
                Terms of Service
            </Typography>

        <div className='rrow'>
            <div className='aboutuscontainer'>
                <Typography  style={{ display: "inline-block", whiteSpace: "pre-line" }} variant="subtitle1" gutterBottom component="div">
                    
                    <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Overview</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                This website is operated by MainMining. Throughout the site, the terms “we”, “us” and “our” refer to MainMining. 
                                MainMining offers this website, including all information, tools and services available from this site to you, the user, 
                                conditioned upon your acceptance of all terms, conditions, policies and notices stated here.

                                <div className='aboutusspacing'/>

                                By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms 
                                and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. 
                                These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, 
                                merchants, and/ or contributors of content.

                                <div className='aboutusspacing'/>

                                Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, 
                                you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may 
                                not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.

                                <div className='aboutusspacing'/>

                                Any new features or tools which are added to the current store shall also be subject to the Terms of Service. 
                                You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, 
                                change or replace any part of these Terms of Service by posting updates and/or changes to our website. 
                                It is your responsibility to check this page periodically for changes. Your continued use of or access to the website 
                                following the posting of any changes constitutes acceptance of those changes.
                            </Typography>
                        </div>
                    <Divider/>
                    <div className='aboutusspacing'/>

                    <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Section 1 - Online Store Terms</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, 
                                or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor 
                                dependents to use this site.
                                You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, 
                                violate any laws in your jurisdiction (including but not limited to copyright laws).
                                You must not transmit any worms or viruses or any code of a destructive nature.
                                A breach or violation of any of the Terms will result in an immediate termination of your Services.                
                            </Typography>
                        </div>
                    <Divider/>
                    <div className='aboutusspacing'/>

                    <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Section 2 - General Conditions</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                We reserve the right to refuse service to anyone for any reason at any time.
                                You understand that your content may be transferred unencrypted and involve (a) transmissions over various networks; 
                                and (b) changes to conform and adapt to technical requirements of connecting networks or devices. 
                                You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, 
                                use of the Service, or access to the Service or any contact on the website through which 
                                the service is provided, without express written permission by us. 
                                The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.          
                            </Typography>
                        </div>
                    <Divider/>
                    <div className='aboutusspacing'/>

                    <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Section 3 - Accuracy, Completeness and Timeliness of Information</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                We are not responsible if information made available on this site is not accurate, complete or current. 
                                The material on this site is provided for general information only and should not be relied upon or used 
                                as the sole basis for making decisions without consulting primary, more accurate, 
                                more complete or more timely sources of information. Any reliance on the material on this site is at your own risk. 
                                This site may contain certain historical information. Historical information, necessarily, is not current and 
                                is provided for your reference only. We reserve the right to modify the contents of this site at any time, 
                                but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.        
                            </Typography>
                        </div>
                    <Divider/>
                    <div className='aboutusspacing'/>

                    <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Section 4 - Modifications to the Service and Prices</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                Prices for our products are subject to change without notice. 
                                We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. 
                                We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.    
                            </Typography>
                        </div>
                    <Divider/>
                    <div className='aboutusspacing'/>

                    <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Section 5 - Products or Services</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                Certain products or services may be available exclusively online through the website. 
                                These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy. 
                                We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. 
                                We cannot guarantee that your computer monitor's display of any color will be accurate.
                                We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. 
                                We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. 
                                All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. 
                                We reserve the right to discontinue any product at any time. 
                                Any offer for any product or service made on this site is void where prohibited.
                                We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, 
                                or that any errors in the Service will be corrected.
                            </Typography>
                        </div>
                    <Divider/>
                    <div className='aboutusspacing'/>

                    <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Section 6 - Accuracy of Billing and Account Information</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, 
                                per household or per order. These restrictions may include orders placed by or under the same customer account, 
                                the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, 
                                we may attempt to notify you by contacting the e‑mail and/or billing address/phone number provided at the time the order was made. 
                                We reserve the right to limit, prohibit, or cancel orders for any reason.

                                <div className='aboutusspacing'/>

                                You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. 

                                <div className='aboutusspacing'/>

                                For more details, please review our Returns Policy.
                            </Typography>
                        </div>
                    <Divider/>
                    <div className='aboutusspacing'/>

                    <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Section 7 - Optional Tools</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                We may provide you with access to third-party tools over which we neither monitor nor have any control nor input. 
                                You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, 
                                representations or conditions of any kind and without any endorsement. 
                                We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.
                                Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure 
                                that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).

                                <div className='aboutusspacing'/>

                                We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). 
                                Such new features and/or services shall also be subject to these Terms of Service.
                            </Typography>
                        </div>
                    <Divider/>
                    <div className='aboutusspacing'/>

                    <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Section 8 - Third-party Links</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                Certain content, products and services available via our Service may include materials from third-parties.

                                <div className='aboutusspacing'/>

                                Third-party links on this site may direct you to third-party websites that are not affiliated with us. 
                                We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability 
                                or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.
                                We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, 
                                or any other transactions made in connection with any third-party websites. Please review carefully the third-party's 
                                policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, 
                                concerns, or questions regarding third-party products should be directed to the third-party.
                            </Typography>
                        </div>
                    <Divider/>
                    <div className='aboutusspacing'/>

                    <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Section 9 - Personal Information</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                Your submission of personal information through the store is governed by our Privacy Policy. Please read our Privacy Policy for more information.
                            </Typography>
                        </div>
                    <Divider/>
                    <div className='aboutusspacing'/>

                    <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Section 10 - Errors, Inaccuracies and Omissions</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                Occasionally there may be information on our site or in the Service that contains typographical errors, 
                                inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, 
                                product shipping charges, transit times and availability. We reserve the right to correct any errors, 
                                inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service 
                                or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).
                                We undertake no obligation to update, amend or clarify information in the Service or on any related website, 
                                including without limitation, pricing information, except as required by law. No specified update or refresh date 
                                applied in the Service or on any related website, should be taken to indicate that all information in the Service 
                                or on any related website has been modified or updated.
                            </Typography>
                        </div>
                    <Divider/>
                    <div className='aboutusspacing'/>

                    <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Section 11 - Prohibited Uses</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: 
                                (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, 
                                federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property 
                                rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, 
                                or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; 
                                (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will 
                                or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; 
                                (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; 
                                (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, 
                                other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.
                            </Typography>
                        </div>
                    <Divider/>
                    <div className='aboutusspacing'/>

                    <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Section 12 - Disclaimer of Warranties; Limitation of Liability</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free. 
                                We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable. 
                                You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you. 
                                You expressly agree that your use of, or inability to use, the service is at your sole risk. 
                                The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 
                                'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, 
                                including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, 
                                title, and non-infringement. In no case shall MainMining, our directors, officers, employees, affiliates, agents, contractors, interns, 
                                suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, 
                                or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, 
                                replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, 
                                arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your 
                                use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any 
                                kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, 
                                even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for 
                                consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.
                            </Typography>
                        </div>
                    <Divider/>
                    <div className='aboutusspacing'/>

                    <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Section 13 - Indemnification</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                You agree to indemnify, defend and hold harmless MainMining and our parent, subsidiaries, affiliates, partners, officers, directors, agents, 
                                contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, 
                                including reasonable attorneys' fees, made by any third-party due to or arising out of your breach of these Terms of Services or 
                                the documents they incorporate by reference, or your violation of any law or the rights of a third-party.
                            </Typography>
                        </div>
                    <Divider/>
                    <div className='aboutusspacing'/>

                    <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Section 14 - Severability</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                In the event that any provision of these Terms of Services are determined to be unlawful, void or unenforceable, 
                                such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, 
                                and the unenforceable portion shall be deemed to be severed from these Terms of Services, such determination 
                                shall not affect the validity and enforceability of any other remaining provisions.
                            </Typography>
                        </div>
                    <Divider/>
                    <div className='aboutusspacing'/>

                    <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Section 15 - Termination</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes. 
                                These Terms of Services are effective unless and until terminated by either you or us. You may terminate these Terms of Services at any time by notifying 
                                us that you no longer wish to use our Services, or when you cease using our site. 
                                If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Services, 
                                we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; 
                                and/or accordingly may deny you access to our Services (or any part thereof).
                            </Typography>
                        </div>
                    <Divider/>
                    <div className='aboutusspacing'/>

                    <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Section 16 - Entire Agreement</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes. 
                                These Terms of Services are effective unless and until terminated by either you or us. You may terminate these Terms of Services at any time by notifying 
                                us that you no longer wish to use our Services, or when you cease using our site. 
                                If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Services, 
                                we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; 
                                and/or accordingly may deny you access to our Services (or any part thereof).
                            </Typography>
                        </div>
                    <Divider/>
                    <div className='aboutusspacing'/>

                    <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Section 17 - Governing Law</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of Taiwan.
                            </Typography>
                        </div>
                    <Divider/>
                    <div className='aboutusspacing'/>

                    <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Section 18 - Changes to Terms of Service</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                You can review the most current version of the Terms of Service at any time at this page. 
                                We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Services 
                                by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. 
                                Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Services 
                                constitutes acceptance of those changes.
                            </Typography>
                        </div>
                    <Divider/>
                    <div className='aboutusspacing'/>

                </Typography>
            </div>
        </div>
      </div>
    )
}

export default TermsOfService;