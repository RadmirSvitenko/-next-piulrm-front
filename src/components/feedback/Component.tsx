'use client';

import React, { useCallback, useState } from 'react';
import { API } from '../../requester';
import { useForm, Resolver } from 'react-hook-form';
const Feedback: React.FC = ({ dict }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm();

  const onSubmit = useCallback(async (d: any) => {
    const response = await API.post('feedback/', d);
    await response.data;
  }, []);

  return (
    <div
      className={
        'sm:pt-[20px] relative flex justify-center items-center bg-[#F0F7FF] w-full h-auto z-20'
      }
    >
      <img
        src="/c-left.png"
        alt="c-left-123"
        className={'absolute left-0 bottom-0 sm:hidden z-10 md:hidden'}
      />
      <img
        src="/c-right.png"
        alt="c-right-456"
        className={'absolute right-0 top-50% sm:hidden z-10 md:hidden'}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={
          'sm:w-full z-20 w-[595px] h-auto pt-[40px] px-[32px] pb-[43px] my-[30px] flex flex-col gap-5 rounded-[10px] bg-white sm:py-[40px] sm:px-[21px] sm:pb-[23px] sm:gap-5'
        }
      >
        <input
          {...register('name', {
            required: 'Это поле не может быть пустым.',
          })}
          placeholder={String(dict?.feedback?.name)}
          className={
            'py-[7px] z-20 px-[15.8px] text-[#000B33] bg-[#F5F8FF]    font-[400] text-[14px] rounded'
          }
        />
        {errors.name && (
          <p className={' text-[12px] font-[400] text-[red]'}>
            {errors.name.message}
          </p>
        )}

        <input
          {...register('email', {
            required: 'Это поле не может быть пустым.',
          })}
          type="email"
          placeholder={String(dict?.feedback?.mail)}
          className={
            'py-[7px] z-20 px-[15.8px] text-[#000B33] bg-[#F5F8FF]  font-[400] text-[14px] rounded'
          }
        />
        {errors?.email && (
          <p className={' text-[12px] font-[400] text-[red]'}>
            {errors.email.message}
          </p>
        )}

        <textarea
          {...register('info_text', {
            required: 'Это поле не может быть пустым.',
          })}
          placeholder={String(dict?.feedback?.message)}
          rows={7}
          className={
            'pt-[28px] z-20 px-[15.8px] text-[#000B33] bg-[#F5F8FF]   font-[400] text-[14px] rounded'
          }
        />
        {errors.message && (
          <p className={' text-[12px] font-[400] text-[red]'}>
            {errors.message.message}
          </p>
        )}

        <button
          type="submit"
          className={
            'by-[40px] z-20 bg-[#4383FF] py-[13px] px-[33px] rounded-[3px] text-[#FFFFFF]  font-[700] text-[14px] text-center'
          }
        >
          {dict?.feedback?.buttonSubmit}
        </button>

        {/* <div className={'w-full z-20 gap-[10px] py-5 flex flex-col'}>
          <span
            className={
              ' text-[14px] font-[400] text-[#000B33] leading-[21px] z-20'
            }
          >
            Пожалуйста, заполните следующую форму, чтобы отправить жалобу. Мы
            ценим ваше мнение и стремимся улучшить наши услуги. Пожалуйста,
            будьте максимально точны и подробны в вашем описании.
          </span>

          <span
            className={
              '  text-[14px] font-[400] text-[#000B33] leading-[21px] z-20'
            }
          >
            Мы обязуемся рассмотреть вашу жалобу в кратчайшие сроки и
            предпринять необходимые действия для улучшения нашего сервиса.
            Благодарим вас за обращение.
          </span>
        </div> */}
      </form>
    </div>
  );
};

export default Feedback;
