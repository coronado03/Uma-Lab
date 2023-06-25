import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import OfferGrid from './OfferGrid';

function Offer() {
  
  return (
    <div className='bg-black text-white px-4 md:px-10 lg:px-20'>
        <h1 className='text-center font-semibold text-4xl pt-10 pb-20'>Послуги</h1>
        <OfferGrid>

        <div className='flex flex-col gap-y-5'>
            <h1 className='font-semibold text-2xl basis-11/12'>ЕКСПРЕС-АНАЛІЗ БРЕНДУ</h1>
            <p className='basis-full text-base font-light'>Проведення швидкого дослідження вашого бренду, аналіз його позиціонування, конкурентне середовище та сприйняття цільової аудиторії, аби надати вам цінну інформацію та рекомендації для подальшого розвитку та успішної стратегії бренду.</p>
        </div>

        <div className='flex flex-col gap-y-5'> 
            <h1 className='font-semibold text-2xl basis-11/12'>РОЗРОБКА ДИЗАЙНУ (НЕЙМІНГ, АЙДЕНТИКА, БРЕНДБУК)</h1>
            <p className='basis-full text-base font-light'>Створення унікальних та привабливих елементів бренду, зокрема його назву, логотип, кольорову палітру та стиль, щоб ви могли вирізнятися на ринку та створити послідовний та професійний образ вашої компанії</p>
        </div>

        <div className='flex flex-col gap-y-5'>
            <h1 className='font-semibold w-full text-2xl basis-11/12'>СТВОРЕННЯ ТА ОФОРМЛЕННЯ МЕДІА-ПРОСТОРУ ДЛЯ КОМПАНІЇ</h1>
            <p className='basis-full text-base font-light'>Розробка і налаштовуння медіа-каналів, в тому числі соціальні мережі, веб-сайти та інші платформи, завдяки яким Ваша компанія ефективно комунікувала зі своєю аудиторією, забезпечувала зростання впізнаваності та залучення нових клієнті</p>
        </div>

        <div className='flex flex-col gap-y-5'>
            <h1 className='font-semibold w-full text-2xl basis-11/12'>СТВОРЕННЯ ПРОФЕСІЙНОГО МЕДІАКОНТЕНТУ З ТЕКСТАМИ ТА БАЗОЮ ІНТЕРВʼЮ З ПРОВІДНИМИ ФАХІВЦЯМИ ТА КЕРІВНИЦТВА</h1>
            <p className='basis-full text-base font-light'>Наша команда розробляє високоякісний відео- та фотоконтент, супроводжує його інформативними текстами та проводить інтервю з експертами вашої компанії, допомагаючи вам ефективно комунікувати зі своєю аудиторією та підвищувати рівень впізнаваності та довіри</p>
        </div>

        <div className='flex flex-col gap-y-5'>
            <h1 className='font-semibold w-full text-2xl basis-11/12'>ТАРГЕТОВАНА РЕКЛАМА FACEBOOK\INSTAGRAM</h1>
            <p className='basis-full text-base font-light'>Створення та оптимізація рекламних кампанії на платформах Facebook та Instagram, забезпечуючи точне налаштування та спрямування реклами на вашу цільову аудиторію, що дозволяє досягти кращих результатів та збільшити конверсію</p>
        </div>

        <div className='flex flex-col gap-y-5'>
            <h1 className='font-semibold w-full text-2xl basis-11/12'>SEO ПРОСУВАННЯ САЙТІВ</h1>
            <p className='basis-full text-base font-light'>Забезпечення оптимізацією вашого веб-сайту, включаючи ключові слова, внутрішню структуру, мета-теги та посилання, для поліпшення видимості сайту в пошукових системах. Це допомагає залучити більше органічного трафіку, підвищити рейтинг вашого сайту та покращити його позиції у пошукових результатів</p>
        </div>

        <div className='flex flex-col gap-y-5' >
            <h1 className='font-semibold text-2xl basis-11/12'>КОНТЕКСТНА РЕКЛАМА</h1>
            <p className='basis-full text-base font-light'>Створення та налаштування рекламних кампанії, що показуються відповідно до контексту та інтересів користувачів. Це дозволяє ефективно дотягнутися до цільової аудиторії, показуючи рекламні оголошення на веб-сайтах, де вони можуть бути найбільш релевантними та привертливими для потенційних клієнтів.</p>
        </div>

        </OfferGrid>
    </div>
  );
}

export default Offer;

