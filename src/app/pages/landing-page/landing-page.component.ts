import { Component, OnInit } from '@angular/core';
import { faTelegramPlane } from '@fortawesome/fontawesome-free-brands';
import {
  faFlask,
  faThumbsUp,
  faDownload,
  faUsers,
  faAward,
  faEdit,
  faCalendar,
  faShare,
  faComments
} from '@fortawesome/free-solid-svg-icons';
import {PageScrollConfig} from 'ngx-page-scroll';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  faTelegramPlane = faTelegramPlane;
  faDownload = faDownload;
  faFlask = faFlask;
  faThumbsUp = faThumbsUp;
  faUsers = faUsers;
  faAward = faAward;
  faEdit = faEdit;
  faCalendar = faCalendar;
  faShare = faShare;
  faComments = faComments;
  links = [
    {name: 'HOME', href: 'header' },
    {name: 'ABOUT', href: 'about'},
    {name: 'RESUME', href: 'resume'},
    {name: 'SKILLS', href: 'skills'},
    {name: 'WORK', href: 'works'},
    {name: 'BLOG', href: 'posts'},
    {name: 'GET HIRED', href: 'hired'},
  ];
  socials = [
    {href: '', img: '../../../assets/image-personal/facebook-rectangle.png'},
    {href: '', img: '../../../assets/image-personal/twitter-rectangle.png'},
    {href: '', img: '../../../assets/image-personal/rectangle.png'},
    {href: '', img: '../../../assets/image-personal/rectangle.png'},
    {href: '', img: '../../../assets/image-personal/rectangle.png'}
  ];
  details = [
    {
      item: 'Name:',
      item_value: 'Vlad Senchuk',
      another_item: 'Date of Birth:',
      another_item_value: '17 March 1995'
    },
    {
      item: 'Address:',
      item_value: '',
      another_item: 'Phone:',
      another_item_value: '(068)706-38-57'
    },
    {
      item: 'Nationality:',
      item_value: 'Ukrainian',
      another_item: 'Email:',
      another_item_value: 'Veliantos@gmail.com'
    }
  ];
  rectangles = [
    {img: '../../../assets/image-personal/big-rectangle.png'},
    {img: '../../../assets/image-personal/big-rectangle.png'},
    {img: '../../../assets/image-personal/big-rectangle.png'},
    {img: '../../../assets/image-personal/big-rectangle.png'}
  ];
  skills = [
    {number_of: '60', percent: '60%', name: 'UI/UX'},
    {number_of: '50', percent: '50%', name: 'Angular'},
    {number_of: '40', percent: '40%', name: 'Javascript' }
  ];
  skills_column = [
    {number_of: '40', percent: '40%', name: 'UI/UX'},
    {number_of: '40', percent: '40%', name: 'UI/UX'},
    {number_of: '40', percent: '40%', name: 'UI/UX'}
  ];
  circle_skills = [
    {number_of: '40', name: 'UI/UX'},
    {number_of: '40', name: 'UI/UX'},
    {number_of: '40', name: 'UI/UX'},
    {number_of: '40', name: 'UI/UX'},
    {number_of: '40', name: 'UI/UX'}
  ];
  achievements = [
    {icon: faFlask, name: 'YEARS EXPERIENCE', num: 0},
    {icon: faThumbsUp, name: 'PROJECTS DONE', num: 0},
    {icon: faUsers, name: 'HAPPY CLIENTS', num: 0},
    {icon: faAward, name: 'AWARDS WON', num: 0},
  ];
  news_block = [
    {
      img: '/src/assets/image-personal/shape.png',
      bigimg: '/src/assets/image-personal/note.png',
      tags: 'PRINT DESIGN, PHOTOSHOP',
      text: 'HOW TO CREATE A PRINT READY BROCHURE USING PHOTOSHOP'
    },
  ];
  news_details = [
    {icon: faEdit, name: 'Vlad Senchuk'},
    {icon: faCalendar, name: '02 Oct 2018'},
    {icon: faShare, name: '02 Oct 2018'},
    {icon: faComments, name: '02 Oct 2018'},
  ];
  constructor() {
  }

  ngOnInit() {
  }

}
