var a = '글 읽기,';
var b = '글 쓰기,';
var c = '글 삭제';

console.log('운영자의 경우' + a + b+ c +'가 가능합니다.');

var grade = '손님';     //'일반회원', '운영자'로 변경해서 테스트

var authority;

if (grade === '손님') {
    authority = '글 읽기';
} else if (grade === '일반 회원') {
    authority = '글 읽기, 글 쓰기';
} else if (grade === '운영자') {
    authority = '글 읽기, 글 쓰기, 글 삭제';
}

console.log(authority);

var grade = '손님';     //'일반회원', '운영자'로 변경해서 테스트

var authority;

switch (grade) {
    case '손님':
        authority = '글 읽기';
        break;
    case '일반 회원':
        authority = '글 읽기, 글 쓰기';
        break;
    case '운영자':
        authority = '글 읽기, 글 쓰기, 글 삭제';
        break;
    default:
        authority = '권한 없음';
}

console.log(authority);