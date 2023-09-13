import React from "react";
import Faq from "react-faq-component";

const data = {
    rows: [
		{
		    title: <div class="font-bold leading-snug tracking-wide mb-1">详细安装说明</div>,
		    content:
		        <div className="leading-8 mb-1">
		            <ul className="list-decimal leading-8">
						<li>0.假设你想放到D盘,想转发的链接是https://gt520.com/msg</li>
		                <li>1.点击[安装到Chrome]下载压缩包,并解压到D盘。</li>
		                <li>2.打开Chrome后在地址栏输入 chrome://extensions/  打开扩展插件管理页面</li>
						<li>3.设置右侧的开发者模式为开启状态,点击左侧的[加载已解压的扩展程序],选择1中的插件文件夹,确定后会出现名为[微信收藏助手]的插件</li>
						<li>4.点击插件的[详情]按钮,找到[扩展程序选项],将0的转发链接完整填入,点击保存</li>
						<li>5.打开微信文件传输助手页面,扫码登入,按F12开启浏览器的开发者模式.</li>
						<li>6.此时用微信发送消息给文件传输助手,可以从自定义链接中收到发送的信息.</li>
		            </ul>
		        </div>,
		},
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">这个插件可以用来做什么？</div>,
            content:
                <div className="leading-8 mb-1">
					<ul className="list-decimal leading-8">
						<li>1.这个插件可以帮助你将接收到的微信文件传输消息转发给自定义地址，不需要任何服务器资源，只需要保持微信文件传输助手页面打开即可。</li>
						<li>2.目前仅支持非中文和分享链接的接收转发.汉字待优化</li>
					</ul>
                </div>,
        },
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">这个插件支持微信群聊吗？</div>,
            content:
                <div className="leading-8 mb-1">
                    不支持，这个插件只能当作个人助手，无法发送群消息。
                </div>,
        },
        
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">使用本插件我该注意点什么？
            </div>,
            content:
                <div className="leading-8 mb-1">
                    <ul className="list-decimal leading-8">
                        <li>1. 使用本插件不得违反任何法律法规,如果你不同意，请立即卸载本插件并删除。</li>
                        <li>2. 使用本插件，请仔细阅读下方的<a >免责声明</a>，如果你不同意该声明，请立即卸载本插件并删除。</li>
                    </ul>
                </div>,
        },
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">免责声明</div>,
            content:
                <div className="leading-8 mb-1">
                    <ul className="list-decimal leading-8">
                        <li>1. 您作为用户下载、安装、使用本插件的任何行为，不构成您与本插件开发者的任何委托、承揽、加工、咨询等民事法律关系。</li>
						<li>2.该插件提供的所有信息和功能仅供参考和娱乐，并不构成任何形式的建议或指导，亦不代表本插件开发者立场，本插件开发者不保证插件提供的信息和功能的准确性、可靠性或适用性。</li>
						<li>3.您应当对在使用本插件过程中发布的所有内容合法性或适当性等负责，包括但不限于取得必要且合法的授权等。本插件根据您上传、输入或发布的内容自动生成相关数据内容，不代表本插件开发者同意您上传、输入或发布的内容或立场，亦不承担任何法律责任。</li>
						<li>4.本插件开发者不对使用该插件所导致的任何损失或损害负责，包括但不限于因使用该插件而导致的任何直接、间接、特殊、附带或后果性损失或损害包括因程序漏洞、错误、滞后或其他任何原因而导致的损失或损害。</li>
						<li>5.请注意，该插件可能不适用于某些特定情况或地区。在使用该插件之前，请确保您已经了解了相关的法律和规定，以确保您的行为是合法的。</li>
						<li>6.请您详细阅读本免责声明。您使用该插件即表示您已经完全理解并同意承担任何风险。如果您不同意这些条款，请不要使用该插件。如您继续使用，则表示您同意接受本插件免责声明的全部条款。</li>
					</ul>
                </div>,
        },
    ],
};

export default function FAQ() {
    return (
        <section className="relative mt-16">
            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8">
                    <h1 className="h2 mb-4 tracking-wider">常见问题</h1>
                </div>

                {/* Section content */}
                <div className="mb-16 md:mb-16">
                    <Faq data={data} />
                </div>
            </div>
        </section>
    );
}